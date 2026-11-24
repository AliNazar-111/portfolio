// Central content source for the portfolio.
// Edit values here to update the site — no component changes needed.

import leiandmarSite from "./assets/work/leiandmar-site.webp";
import leiandmarFigma from "./assets/work/leiandmar-figma.webp";
import leafySite from "./assets/work/leafy-site.webp";
import leafyFigma from "./assets/work/leafy-figma.webp";
import roverFigma from "./assets/work/rover-figma.webp";

export const profile = {
  name: "Muhammad Ali",
  role: "Software Engineer & UI/UX Designer",
  headline: "Full-Stack · UI/UX & Figma · Shopify & WordPress · Desktop Apps",
  tagline:
    "I design in Figma and build what I design — Shopify and WordPress stores, full-stack web apps, desktop software in C# / .NET and VB6, and developer tooling.",
  location: "Open to remote work",
  available: true,
};

export const links = {
  github: "https://github.com/AliNazar-111",
  linkedin: "https://www.linkedin.com/in/muhammad-ali-18569331b/",
};

export const about = {
  // Neutral, non-portrait image — swap for a real photo when available.
  photo:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80&auto=format&fit=crop",
  photoAlt: "Code on a screen",
  heading: "From Figma to production — I ship end to end.",
  paragraphs: [
    "I'm a software engineer and UI/UX designer who enjoys the whole journey — UX audits, wireframes and high-fidelity designs in Figma, then the Shopify or WordPress storefront, Next.js and TypeScript front-end, Node backend, and the database underneath.",
    "Beyond the web I build desktop software: a parametric BIM authoring app in C# / .NET / WPF, and a Visual Basic 6 healthcare system for Cavan, Mullingar, Tullamore and Portlaoise in Ireland. My open-source work spans real-time collaborative editing with CRDTs, database CLIs, and Python projects in computer vision and offline voice.",
  ],
  highlights: [
    "UI/UX design in Figma — audits, wireframes, prototypes",
    "Shopify & WordPress stores, designed and built",
    "Full-stack web apps — Next.js, TypeScript, Node",
    "Desktop software — C# / .NET / WPF and VB6",
    "Real-time systems & developer tooling",
  ],
};

export const stats = [
  { value: "8", label: "Featured Projects" },
  { value: "3", label: "Client Design Projects" },
  { value: "15", label: "Public Repos" },
  { value: "6+", label: "Languages" },
];

export const services = [
  {
    icon: "pen",
    title: "UI/UX & Figma Design",
    desc: "UX audits, wireframes, and high-fidelity designs in Figma — clear user flows and prototypes that hand off cleanly to development.",
    tags: ["Figma", "UX Audit", "Wireframes", "Prototyping"],
  },
  {
    icon: "bag",
    title: "Shopify & WordPress",
    desc: "Storefronts built from the Figma design — home, collection, and product pages that are fast, on-brand, and easy for the client to manage.",
    tags: ["Shopify", "Liquid", "WordPress", "Elementor"],
  },
  {
    icon: "web",
    title: "Full-Stack Web Apps",
    desc: "End-to-end product builds with Next.js and React on the front, Node and TypeScript APIs behind them.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    icon: "desktop",
    title: "Desktop & Enterprise Apps",
    desc: "Windows software, from modern C# / .NET / WPF applications to Visual Basic 6 systems that still run day-to-day operations.",
    tags: ["C#", ".NET", "WPF", "VB6"],
  },
  {
    icon: "flow",
    title: "Real-Time & Collaboration",
    desc: "Multi-user, conflict-free systems with live cursors and presence powered by CRDTs and WebSockets.",
    tags: ["Yjs / CRDT", "WebSocket", "Supabase"],
  },
  {
    icon: "agents",
    title: "Developer Tooling & CLIs",
    desc: "Command-line tools that make databases easier — schema-aware seeding, migrations, and data sync.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    icon: "voice",
    title: "AI & Computer Vision",
    desc: "Python systems for gesture control, offline voice assistants, and AI-assisted media editing.",
    tags: ["Python", "OpenCV", "MediaPipe", "Local LLM"],
  },
  {
    icon: "bolt",
    title: "Backend & Databases",
    desc: "Reliable APIs and data layers across SQL and NoSQL, with safety and dependency-aware design.",
    tags: ["PostgreSQL", "MongoDB", "Supabase"],
  },
];

// Client UI/UX work. `images.site` is a capture of the live site, `images.figma`
// the Figma file's thumbnail; a card shows a Live / Figma toggle when it has both.
export const designWork = [
  {
    title: "Lei & Mar Co",
    category: "UX Audit · Shopify",
    desc: "A page-by-page UX audit of a waterproof gold-jewellery store — annotated redesigns of the home, collection, and product pages in Figma for the brand's Shopify storefront.",
    tags: ["Figma", "UX Audit", "Shopify"],
    images: { site: leiandmarSite, figma: leiandmarFigma },
    links: {
      figma:
        "https://www.figma.com/design/8gZuhOaQpbEktyiOKYWQEd/Lei---Mar-Audit?node-id=64-88&t=ExeP6ej3ajrXAlRe-1",
      live: "https://leiandmar.com/",
    },
  },
  {
    title: "Be Happy Go Leafy",
    category: "Web Design · WordPress",
    desc: "Website design for a botanical wellness brand — a playful, mascot-led look carried across the home, shop, and content pages, built in WordPress with Elementor.",
    tags: ["Figma", "WordPress", "Elementor"],
    images: { site: leafySite, figma: leafyFigma },
    links: {
      figma:
        "https://www.figma.com/design/EAJzPeuLh2Fdn3gnqlDbj8/Website?node-id=0-1&t=usWdEvkvMBWrbHXi-1",
      live: "https://behappygoleafy.com/",
    },
  },
  {
    title: "Rover Vaults",
    category: "Store Design · Shopify",
    desc: "A rugged, camo-green storefront for an off-road vehicle brand — home, inventory, and specification pages with responsive layouts, designed in Figma for Shopify.",
    tags: ["Figma", "Shopify", "Responsive"],
    images: { figma: roverFigma },
    links: {
      figma:
        "https://www.figma.com/design/8spUaVqncTt8RIuF9y16hX/rovervault_design?node-id=0-1&t=LeQpSzUFCa10EPnb-1",
      live: null, // Shopify dev store is currently unavailable
    },
    note: "Design file only",
  },
];

// Store niches shown under the design work.
export const storeNiches = [
  "Food & Beverage",
  "Coffee",
  "Jewellery",
  "Beauty & Skincare",
  "Bath & Body",
  "Candles & Home Fragrance",
  "Fashion & Apparel",
  "Bridal",
  "Children's Products",
  "Health & Wellness",
  "Home & Lifestyle",
  "Bedding",
  "Lingerie",
  "Eco-Friendly",
  "Technology",
];

export const projects = [
  {
    title: "SynkDocs",
    category: "Real-Time · Collaboration",
    desc: "A Google-Docs-style collaborative editor with live cursors, presence, threaded comments, and version history — conflict-free sync via Yjs CRDTs over WebSockets.",
    tags: ["Next.js", "TypeScript", "Yjs / CRDT", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/SynkDocs",
  },
  {
    title: "BIMDesigner",
    category: "Desktop · BIM / AEC",
    desc: "A parametric BIM authoring app for Windows — walls, levels, schedules, sections, 3D views, and sheets, with PDF, DWG/DXF, and IFC4 export, all on a UI-free core model.",
    tags: ["C#", ".NET 10", "WPF", "IFC4"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/BIM",
  },
  {
    title: "Healthcare System",
    category: "Desktop · Healthcare",
    desc: "A Windows desktop healthcare system built in Visual Basic 6 for sites in Cavan, Mullingar, Tullamore, and Portlaoise, Ireland — classic VB6 forms and data access, kept dependable for daily use across all four locations.",
    tags: ["VB6", "Windows Desktop", "Healthcare"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop",
    link: null, // private client project — no public repo
  },
  {
    title: "schema-seed",
    category: "Dev Tooling · CLI",
    desc: "A universal database seeding tool that generates realistic, constraint-safe dummy data straight from your schema — with automatic foreign-key ordering across six database engines.",
    tags: ["TypeScript", "Node.js", "Multi-DB", "npm"],
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/schema-seed",
  },
  {
    title: "supabase-migrator",
    category: "Dev Tooling · CLI",
    desc: "A PostgreSQL introspection and migration CLI for Supabase — moves schemas, functions, triggers, storage, and data between projects with dry-run safety.",
    tags: ["TypeScript", "PostgreSQL", "Supabase", "CLI"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/supabase-migrator",
  },
  {
    title: "HandiMouse",
    category: "Computer Vision",
    desc: "Control the mouse with hand gestures through a webcam. A multi-threaded pipeline with low-latency tracking, FPS diagnostics, and emergency-stop safety controls.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/HandiMouse",
  },
  {
    title: "Astra",
    category: "AI · Voice",
    desc: "An offline, AI-powered desktop voice assistant for Windows — wake-word detection, local speech recognition and LLM intent, plus whitelisted system control.",
    tags: ["Python", "Local LLM", "Speech-to-Text"],
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/Astra",
  },
  {
    title: "SubForge",
    category: "AI · Media",
    desc: "An AI-powered subtitle editor to generate, edit, and style captions at the word level with real-time preview.",
    tags: ["TypeScript", "Next.js", "AI"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80&auto=format&fit=crop",
    link: "https://github.com/AliNazar-111/SubForge",
  },
];

export const techStack = [
  { name: "TypeScript", group: "Languages" },
  { name: "JavaScript", group: "Languages" },
  { name: "Python", group: "Languages" },
  { name: "C#", group: "Languages" },
  { name: "Figma", group: "Design" },
  { name: "Shopify", group: "E-commerce" },
  { name: "Liquid", group: "E-commerce" },
  { name: "WordPress", group: "E-commerce" },
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: ".NET / WPF", group: "Desktop" },
  { name: "Visual Basic 6", group: "Desktop" },
  { name: "WebSocket", group: "Backend" },
  { name: "Yjs / CRDT", group: "Real-Time" },
  { name: "PostgreSQL", group: "Database" },
  { name: "Supabase", group: "Database" },
  { name: "MongoDB", group: "Database" },
  { name: "OpenCV", group: "AI / CV" },
  { name: "MediaPipe", group: "AI / CV" },
  { name: "Three.js", group: "3D" },
  { name: "Git & GitHub", group: "Tooling" },
];
