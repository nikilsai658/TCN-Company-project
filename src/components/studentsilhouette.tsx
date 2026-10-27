// shadow-style side view of a man sitting on a chair, typing on a laptop at a table (faces left)
export function StudentSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="15 185 290 300"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="student-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#24c0c5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#24c0c5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screen-light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#24c0c5" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#24c0c5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="shirt-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe7eb" />
        </linearGradient>
        <linearGradient id="pants-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d5db" />
          <stop offset="100%" stopColor="#b3c2ca" />
        </linearGradient>
      </defs>

      {/* soft glow behind the scene */}
      <circle cx="160" cy="330" r="160" fill="url(#student-glow)" />

      {/* ground shadow */}
      <ellipse cx="160" cy="474" rx="140" ry="6" fill="#000000" opacity="0.25" />

      {/* table */}
      <g fill="rgba(255,255,255,0.35)">
        <rect x="30" y="324" width="140" height="7" rx="2" />
        <rect x="38" y="330" width="6" height="140" rx="2" />
        <rect x="156" y="330" width="6" height="140" rx="2" />
      </g>

      {/* chair */}
      <g fill="rgba(255,255,255,0.35)">
        <path d="M266 392 L276 278 Q278 270 285 272 Q290 274 289 282 L278 392 Z" />
        <rect x="168" y="390" width="112" height="8" rx="3" />
        <path d="M176 396 L182 396 L176 470 L170 470 Z" />
        <path d="M262 396 L268 396 L274 470 L268 470 Z" />
      </g>

      {/* body */}
      <g fill="#ffffff">
        {/* head: back of skull, forehead, nose, lips, chin, throat */}
        <path d="M218 256 C230 246 233 222 224 212 C214 202 196 202 188 210 C183 215 182 222 183 228 L177 238 L182 241 C181 244 182 246 181 248 C181 252 185 255 190 255 C194 256 197 259 199 265 L201 274 L224 270 Z" />

        {/* torso with rounded upper back */}
        <path fill="url(#shirt-shade)" d="M199 266 C190 274 188 288 189 300 C190 320 193 344 196 366 L244 388 C252 384 254 366 250 346 C246 322 244 300 240 286 C236 276 230 270 222 266 Z" />

        {/* thigh resting on the seat */}
        <path fill="url(#pants-shade)" d="M200 362 C176 358 150 358 134 360 C124 362 120 370 122 378 C124 386 130 390 138 390 L248 390 C256 388 256 376 248 370 Z" />

        {/* shin with calf curve */}
        <path fill="url(#pants-shade)" d="M124 378 C121 404 123 432 127 456 L141 456 C145 434 149 406 140 382 Z" />

        {/* shoe */}
        <path fill="#7d929c" d="M126 450 L142 450 C146 456 147 466 144 472 L100 472 C93 472 92 464 99 462 C110 460 120 456 126 450 Z" />
      </g>

      {/* face + clothing details */}
      <g fill="none" stroke="rgba(47,62,70,0.45)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* hair */}
        <path d="M184 216 C190 203 214 200 226 212 C233 222 233 240 224 252 C222 240 217 230 209 226 C201 222 192 222 186 224 Z" fill="#5b6f78" stroke="none" />
        {/* ear, eye, eyebrow */}
        <path d="M206 232 C212 228 216 236 213 242 C211 246 207 245 206 242" />
        <path d="M186 233 L190 233" />
        <path d="M184 228 C187 226 190 226 193 228" />
        {/* shirt collar */}
        <path d="M199 266 L208 278 L215 268" />
        {/* belt */}
        <path d="M196 360 C212 366 230 374 247 382" stroke="rgba(47,62,70,0.6)" strokeWidth="3" />
        {/* knee crease + shoe sole */}
        <path d="M150 362 C158 366 164 366 170 364" />
        <path d="M98 470 L144 470" stroke="#4d5f68" strokeWidth="2" />
      </g>

      {/* light from the screen onto the face */}
      <path d="M86 280 L94 318 L181 248 L180 230 Z" fill="url(#screen-light)" />

      {/* laptop on the table: screen hinged at the far end, facing the man */}
      <g fill="#2F3E46" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M92 318 L152 318 L152 324 L92 324 Z" />
        <path d="M92 320 L82 276 L89 275 L99 318 Z" />
      </g>

      {/* arm: upper arm, forearm and hand on the keyboard (outlined so it reads over the torso) */}
      <g fill="#ffffff" stroke="rgba(47,62,70,0.4)" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M206 274 C222 272 228 288 224 306 C222 318 218 330 212 338 C204 344 192 340 194 328 C196 310 196 290 198 280 Z" />
        <path d="M212 334 C206 344 194 344 188 340 L136 326 C128 324 128 314 136 312 L196 322 C204 322 210 326 212 334 Z" />
        <path d="M136 312 C126 310 116 312 110 315 C107 319 111 322 118 322 L136 326 Z" />
        <path d="M146 314 L142 328" />
        <path d="M118 316 L126 317 M116 319 L124 320" />
      </g>
    </svg>
  );
}
