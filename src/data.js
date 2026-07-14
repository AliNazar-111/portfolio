// Central content source for the portfolio.
// Edit values here to update the site — no component changes needed.

export const profile = {
  name: "Muhammad Ali",
  role: "Software Engineer",
  headline: "Full-Stack · Real-Time Systems · Developer Tooling",
  tagline:
    "I build full-stack web apps, real-time collaborative systems, and developer tooling — plus the occasional Python AI experiment.",
  location: "Open to remote work",
  available: true,
};

export const links = {
  github: "https://github.com/AliNazar-111",
  linkedin: "https://www.linkedin.com/in/muhammmad-ali-1703b43bb/",
};

export const about = {
  // Neutral, non-portrait image — swap for a real photo when available.
  photo:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80&auto=format&fit=crop",
  photoAlt: "Code on a screen",
  heading: "Software engineer who ships end to end.",
  paragraphs: [
    "I'm a software engineer who enjoys the whole stack — from Next.js and TypeScript front-ends to Node backends, real-time sync, and the databases underneath. Most of what I build starts as a problem I hit myself and turns into a tool other people can use.",
    "My open-source work spans real-time collaborative editing with CRDTs, database CLIs for seeding and migration, and a couple of Python projects in computer vision and offline voice. I care about clean architecture, measurable performance, and code that holds up in production.",
  ],
  highlights: [
    "Full-stack web apps — Next.js, TypeScript, Node",
    "Real-time & collaborative systems (CRDTs, WebSocket)",
    "Developer tooling & database CLIs",
  ],
};

export const stats = [
  { value: "6", label: "Featured Projects" },
  { value: "13", label: "Public Repos" },
  { value: "5+", label: "Languages" },
  { value: "100%", label: "Open Source" },
];

export const services = [
  {
    icon: "web",
    title: "Full-Stack Web Apps",
    desc: "End-to-end product builds with Next.js and React on the front, Node and TypeScript APIs behind them.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
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
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
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
