import nextwash from "../assets/nextwash.png";
import nw1 from "../assets/nextwash1.jpg.jpeg";
import nw2 from "../assets/nextwash2.jpg.jpeg";
import nw3 from "../assets/nextwash3.jpg.jpeg";
import nw4 from "../assets/nextwash4.jpg.jpeg";
import nw5 from "../assets/nextwash5.jpg.jpeg";
import lmsTx1 from "../assets/lms-tx1.jpg";
import lmsTx2 from "../assets/lms-tx2.jpg";
import lmsTx3 from "../assets/lms-tx3.jpg";
import lmsTx4 from "../assets/lms-tx4.jpg";
import lms1 from "../assets/lms-1.jpg";
import tcnLogo from "../assets/logo.png";
import hh1 from "../assets/h&hcoworking1.png.png";
import hh2 from "../assets/h&hcoworking2.png.png";
import hh3 from "../assets/h&hcoworking3.png.png";
import hh4 from "../assets/h&hcoworking4.png.png";
import hh5 from "../assets/h&hcoworking5.png.png";

export type Project = {
  name: string;
  // short initials shown when there is no logo image
  initials: string;
  category: string;
  url: string;
  note?: string;
  logo?: string;
  logoBg: string;
  // screenshots, in order; a branded cover is shown when empty
  gallery: string[];
  // tall phone shots look better 2 per slide
  perView?: number;
  description: string;
  highlights: string[];
  stack: Record<string, string[]>;
  accent: string;
};

// To add screenshots: put them in src/assets, import them here and list them in `gallery`.
export const projects: Project[] = [
  {
    name: "H&H Coworking Spaces",
    initials: "H&H",
    category: "Website · Coworking",
    url: "https://hhcoworkingspaces.com/",
    logoBg: "#ffffff",
    gallery: [hh1, hh2, hh3, hh4, hh5],
    description:
      "A premium marketing website for H&H Co-Working Spaces, a coworking brand on 100 Feet Road, Madhapur, Hyderabad. The site showcases every workspace type and turns visitors into enquiries.",
    highlights: [
      "Private offices, private cabins, dedicated desks",
      "Meeting rooms & halls, business lounge",
      "Virtual office with GST registration support",
      "Enquiry form saved straight to Google Sheets via Apps Script",
    ],
    stack: {
      Frontend: ["React", "Vite", "Tailwind CSS"],
      Backend: ["Google Apps Script"],
      Database: ["Google Sheets"],
    },
    accent: "#d4a54a",
  },
  {
    name: "OneDestiny",
    initials: "OD",
    category: "Platform · Event management",
    url: "https://www.onedestiny.online/",
    logoBg: "#0e0b08",
    gallery: [],
    description:
      "India's premium event management and wedding vendor booking platform. Couples discover, compare and book verified vendors, and vendors register and showcase their work.",
    highlights: [
      "9 categories: photography, videography, makeup, catering, venues, decor, pandits, mehendi, DJ & music",
      "1,600+ vendor listings with starting prices",
      "Vendor registration and contact forms stored in Google Sheets via Apps Script",
      "App preview, how-it-works and service detail pages",
    ],
    stack: {
      Frontend: ["React", "Vite", "Tailwind CSS"],
      Backend: ["Google Apps Script"],
      Database: ["Google Sheets"],
    },
    accent: "#c9a84c",
  },
  {
    name: "NextWash",
    initials: "NW",
    category: "Laundry app + web portal",
    url: "",
    logo: nextwash,
    logoBg: "#0057e7",
    gallery: [nw1, nw2, nw3, nw4, nw5],
    perView: 2,
    description:
      "An on-demand laundry app with a web admin portal. Customers pick a service, add clothes item by item, subscribe to monthly plans and get pickup and delivery, while the business manages orders from the portal.",
    highlights: [
      "Wash & iron, wash & fold, steam ironing, dry cleaning, shoe cleaning, saree rolling",
      "Item-wise cart with live price estimate",
      "Monthly plans: Bachelor ₹1,999 (20 kg) and Family ₹5,500 (60 kg)",
      "Refer & earn ₹100, plus a web portal for admins to manage orders",
    ],
    stack: {
      Frontend: ["Flutter"],
      Backend: [".NET"],
    },
    accent: "#5b9bff",
  },
  {
    name: "TechNex LMS Portal",
    initials: "TCN",
    category: "Web portal · LMS",
    url: "",
    note: "In-house platform",
    logo: tcnLogo,
    logoBg: "#0b1215",
    // portal screenshots 1-4, then the My Courses page
    gallery: [lmsTx1, lmsTx2, lmsTx3, lmsTx4, lms1],
    description:
      "TechNex Cloud Networks' own learning portal for its EdTech programs. Students work through learning domains and courses, solve coding assignments in the browser, and track their rank on a leaderboard.",
    highlights: [
      "My Domains and My Courses dashboards (e.g. Data Science & AI, Python)",
      "In-browser code editor: run, submit, score, difficulty and tab-switch tracking",
      "Student leaderboard with ranks and points",
      "Certifications and Raise Ticket support",
    ],
    stack: {
      Frontend: ["Angular"],
      Backend: [".NET"],
      Database: ["Supabase"],
    },
    accent: "#24c0c5",
  },
];
