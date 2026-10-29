import { useEffect, useRef } from "react";

const GRID = 36;
const ACCENT = "36, 192, 197"; // #24c0c5
// 8 directions, 45° apart, so traces bend like circuit-board wiring
const DIRS: [number, number][] = [
  [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1],
];

type Trace = { pts: [number, number][]; total: number };
type Pulse = { trace: Trace; d: number; speed: number };

// walks cell by cell and stops when it hits another wire, so traces never cross
function makeTrace(w: number, h: number, used: Set<string>): Trace | null {
  const cols = Math.floor(w / GRID);
  const rows = Math.floor(h / GRID);
  let cx = Math.floor(Math.random() * (cols + 1));
  let cy = Math.floor(Math.random() * (rows + 1));
  if (used.has(`${cx},${cy}`)) return null;
  let dir = Math.floor(Math.random() * 4) * 2; // start straight, not diagonal
  const cells: [number, number][] = [[cx, cy]];
  const segments = 2 + Math.floor(Math.random() * 3);
  outer: for (let s = 0; s < segments; s++) {
    if (s > 0) dir = (dir + (Math.random() < 0.5 ? 1 : 7)) % 8;
    const steps = 2 + Math.floor(Math.random() * 5);
    const [dx, dy] = DIRS[dir];
    for (let k = 0; k < steps; k++) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < -1 || ny < -1 || nx > cols + 1 || ny > rows + 1) break outer;
      // keep a one-cell gap from other wires (check neighbours too)
      let blocked = false;
      for (let ox = -1; ox <= 1 && !blocked; ox++) {
        for (let oy = -1; oy <= 1; oy++) {
          if (used.has(`${nx + ox},${ny + oy}`)) { blocked = true; break; }
        }
      }
      if (blocked) break outer;
      cx = nx;
      cy = ny;
      cells.push([cx, cy]);
    }
  }
  if (cells.length < 4) return null;
  cells.forEach(([x, y]) => used.add(`${x},${y}`));

  // collapse straight runs into corner points
  const pts: [number, number][] = [];
  cells.forEach(([x, y], i) => {
    const prev = cells[i - 1];
    const next = cells[i + 1];
    const straight = prev && next && x - prev[0] === next[0] - x && y - prev[1] === next[1] - y;
    if (!straight) pts.push([x * GRID, y * GRID]);
  });
  let total = 0;
  for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  return { pts, total };
}

function pointAt(t: Trace, d: number): [number, number] {
  for (let i = 1; i < t.pts.length; i++) {
    const [ax, ay] = t.pts[i - 1];
    const [bx, by] = t.pts[i];
    const len = Math.hypot(bx - ax, by - ay);
    if (d <= len) return [ax + ((bx - ax) * d) / len, ay + ((by - ay) * d) / len];
    d -= len;
  }
  return t.pts[t.pts.length - 1];
}

// animated circuit-wire background; fills its positioned parent
export function HeroWires() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let traces: Trace[] = [];
    let pulses: Pulse[] = [];
    let wires: HTMLCanvasElement | null = null; // static layer, drawn once per resize
    let bright: HTMLCanvasElement | null = null;
    let shine: HTMLCanvasElement | null = null;
    let shineX = 0;
    let frame = 0;

    const newPulse = (): Pulse => ({
      trace: traces[Math.floor(Math.random() * traces.length)],
      d: 0,
      speed: 0.8 + Math.random() * 1.6,
    });

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const used = new Set<string>();
      const target = Math.round((w * h) / 14000);
      traces = [];
      for (let tries = 0; traces.length < target && tries < target * 30; tries++) {
        const t = makeTrace(w, h, used);
        if (t) traces.push(t);
      }
      pulses = Array.from({ length: Math.round(traces.length * 0.45) }, () => {
        const p = newPulse();
        p.d = Math.random() * p.trace.total; // stagger so they don't all start together
        return p;
      });

      const layer = (alpha: number, padAlpha: number, glow: number) => {
        const c = document.createElement("canvas");
        c.width = canvas.width;
        c.height = canvas.height;
        const lctx = c.getContext("2d")!;
        lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        lctx.lineWidth = 1.3;
        lctx.lineJoin = "round";
        lctx.lineCap = "round";
        lctx.shadowColor = `rgba(${ACCENT}, 0.9)`;
        lctx.shadowBlur = glow;
        for (const t of traces) {
          lctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
          lctx.beginPath();
          t.pts.forEach(([px, py], i) => (i ? lctx.lineTo(px, py) : lctx.moveTo(px, py)));
          lctx.stroke();
          // via pads at both ends: ring with a bright centre
          for (const [px, py] of [t.pts[0], t.pts[t.pts.length - 1]]) {
            lctx.strokeStyle = `rgba(${ACCENT}, ${padAlpha})`;
            lctx.beginPath();
            lctx.arc(px, py, 3.5, 0, Math.PI * 2);
            lctx.stroke();
            lctx.fillStyle = `rgba(${ACCENT}, ${padAlpha})`;
            lctx.beginPath();
            lctx.arc(px, py, 1.3, 0, Math.PI * 2);
            lctx.fill();
          }
        }
        return c;
      };

      // resting wires, kept soft
      wires = layer(0.22, 0.45, 0);
      // fully lit copy, revealed only where the shine band passes
      bright = layer(0.95, 1, 10);
      shine = document.createElement("canvas");
      shine.width = canvas.width;
      shine.height = canvas.height;
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      if (wires) ctx.drawImage(wires, 0, 0, w, h);

      // diagonal band of light sweeping across the circuit
      if (bright && shine) {
        const sctx = shine.getContext("2d")!;
        sctx.setTransform(1, 0, 0, 1, 0, 0);
        sctx.globalCompositeOperation = "source-over";
        sctx.clearRect(0, 0, shine.width, shine.height);
        sctx.drawImage(bright, 0, 0);
        sctx.globalCompositeOperation = "destination-in";
        const band = 260;
        const sx = (shineX / w) * shine.width;
        const g = sctx.createLinearGradient(sx - band, 0, sx + band, shine.height * 0.4);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(0.5, "rgba(0,0,0,1)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        sctx.fillStyle = g;
        sctx.fillRect(0, 0, shine.width, shine.height);
        ctx.drawImage(shine, 0, 0, w, h);
      }

      for (const p of pulses) {
        // fading tail behind the signal head
        const tail = 70;
        for (let k = 0; k < tail; k += 3) {
          const dd = p.d - k;
          if (dd < 0 || dd > p.trace.total) continue;
          const [x, y] = pointAt(p.trace, dd);
          ctx.fillStyle = `rgba(${ACCENT}, ${0.95 * (1 - k / tail)})`;
          ctx.fillRect(x - 1.25, y - 1.25, 2.5, 2.5);
        }
        if (p.d <= p.trace.total) {
          const [x, y] = pointAt(p.trace, p.d);
          ctx.fillStyle = `rgba(${ACCENT}, 0.35)`;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "rgba(230, 255, 255, 1)";
          ctx.beginPath();
          ctx.arc(x, y, 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = () => {
      const cw = canvas.clientWidth;
      shineX += cw / 360; // crosses the hero in ~6s, then pauses off-screen
      if (shineX > cw * 1.8) shineX = -cw * 0.3;
      for (const p of pulses) {
        p.d += p.speed;
        if (p.d > p.trace.total + 70) Object.assign(p, newPulse());
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    setup();
    if (reduceMotion) draw();
    else frame = requestAnimationFrame(tick);

    const observer = new ResizeObserver(() => {
      setup();
      if (reduceMotion) draw();
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* slow drifting teal glows behind the wires */}
      <div className="hero-aurora hero-aurora-1" aria-hidden="true" />
      <div className="hero-aurora hero-aurora-2" aria-hidden="true" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
      {/* soft vignette so the wires fade toward the edges and the text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(8,14,18,0) 55%, rgba(8,14,18,0.7) 100%)" }}
        aria-hidden="true"
      />
    </>
  );
}
