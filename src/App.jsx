import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import "./App.css";
import { Icon } from "./icons.jsx";
import heroImg from "./assets/hero.png";
import {
  profile,
  links,
  about,
  stats,
  services,
  projects,
  techStack,
} from "./data.js";

/* ---------------- animation presets ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const viewport = { once: true, amount: 0.2 };

/* line/word mask reveal — inner slides up from behind an overflow-hidden clip */
const maskUp = {
  hidden: { y: "115%" },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.7, delay: 0.25 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};
const maskLine = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className, variants = fadeUp, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section head (with title mask reveal) ---------------- */
function SectionHead({ eyebrow, children, sub }) {
  return (
    <div className="section-head">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.span className="eyebrow" variants={fadeUp}>
          {eyebrow}
        </motion.span>
        <h2 className="section-title">
          <span className="title-mask">
            <motion.span className="title-inner" variants={maskLine}>
              {children}
            </motion.span>
          </span>
        </h2>
        {sub && (
          <motion.p className="section-sub" variants={fadeUp}>
            {sub}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

/* ---------------- Preloader ---------------- */
function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (v) => setPct(Math.round(v)),
      onComplete: onDone,
    });
    return () => controls.stop();
  }, [onDone]);

  return (
    <motion.div className="preloader" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <div className="pre-inner">
        <motion.div
          className="pre-logo"
          initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
        >
          ◆
        </motion.div>
        <div className="pre-bar">
          <div className="pre-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="pre-text">Initializing · {pct}%</div>
      </div>
    </motion.div>
  );
}

/* ---------------- Cursor spotlight ---------------- */
function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });
  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return <motion.div className="cursor-glow" style={{ left: sx, top: sy }} />;
}

/* ---------------- Custom cursor (dot + spring ring) ---------------- */
const CURSOR_HOVER = 'a, button, .card, .tech-pill, .stat, .edu-card, .tl-card, [data-cursor]';
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest?.(CURSOR_HOVER)) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest?.(CURSOR_HOVER)) setHovering(false);
    };
    const press = () => setDown(true);
    const release = () => setDown(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    window.addEventListener("mousedown", press);
    window.addEventListener("mouseup", release);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", press);
      window.removeEventListener("mouseup", release);
    };
  }, [x, y]);

  const state = `${hovering ? "hover" : ""} ${down ? "down" : ""}`;
  return (
    <>
      <motion.div className={`cursor-ring ${state}`} style={{ left: ringX, top: ringY }} />
      <motion.div className={`cursor-dot ${state}`} style={{ left: x, top: y }} />
    </>
  );
}

/* ---------------- Aurora background ---------------- */
function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
    </div>
  );
}

/* ---------------- Magnetic wrapper ---------------- */
function Magnetic({ children, className, strength = 0.35, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={leave}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

/* ---------------- Count-up number ---------------- */
function CountUp({ value }) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  const prefix = match ? match[1] : "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match ? match[3] : value;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navLinks = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Work", "#work"],
    ["Stack", "#stack"],
  ];
  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
    >
      <a href="#top" className="nav-brand">
        <span className="nav-logo">◆</span>
        <span>Muhammad&nbsp;Ali</span>
      </a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Get in touch
        </a>
      </div>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        {open ? <Icon.close width={20} height={20} /> : <Icon.menu width={20} height={20} />}
      </button>
    </motion.nav>
  );
}

/* ---------------- Rotating role text ---------------- */
const roles = [
  "Full-Stack Development",
  "Real-Time Systems",
  "Developer Tooling",
  "AI & Computer Vision",
  "Web Applications",
];
function Rotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="hero-rotator">
      <span className="bar" />
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="grad-text"
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ ready }) {
  const float = (delay) => ({
    animate: { y: [0, -12, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
  });
  const heroLines = [
    { text: "Muhammad Ali", accent: true },
    { text: "Building software that ships.", accent: false },
  ];
  let wordIndex = 0;
  return (
    <header className="hero" id="top">
      <motion.div initial="hidden" animate={ready ? "show" : "hidden"} variants={stagger}>
        <motion.div className="hero-badge" variants={fadeUp}>
          <span className="hero-dot" />
          Open to new projects
        </motion.div>

        <h1 className="hero-title">
          {heroLines.map((line, li) => (
            <span className="hero-line" key={li}>
              {line.text.split(" ").map((w) => {
                const i = wordIndex++;
                return (
                  <span className="mask" key={i}>
                    <motion.span
                      className={line.accent ? "grad-text" : "word"}
                      variants={maskUp}
                      custom={i}
                    >
                      {w}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.div className="hero-designation" variants={fadeUp}>
          {profile.role}
        </motion.div>

        <motion.div variants={fadeUp}>
          <Rotator />
        </motion.div>

        <motion.p className="hero-sub" variants={fadeUp}>
          {profile.tagline}
        </motion.p>

        <motion.div className="hero-meta" variants={fadeUp}>
          <span>
            <Icon.flow width={17} height={17} /> {profile.headline}
          </span>
          <span>
            <Icon.pin width={17} height={17} /> {profile.location}
          </span>
          <span>
            <Icon.bolt width={17} height={17} /> Open source on GitHub
          </span>
        </motion.div>

        <motion.div className="hero-actions" variants={fadeUp}>
          <Magnetic className="btn btn-primary" href={links.github} target="_blank" rel="noreferrer">
            View my GitHub <Icon.arrow width={18} height={18} />
          </Magnetic>
          <Magnetic className="btn btn-ghost" href="#work" strength={0.25}>
            See my work
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      >
        <div className="hero-ring ring-1" />
        <div className="hero-ring ring-2" />
        <div className="hero-orb" />
        <motion.img
          src={heroImg}
          alt="AI system illustration"
          className="hero-img"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="hero-chip chip-1" {...float(0)}>
          <span className="chip-ico">
            <Icon.flow width={18} height={18} />
          </span>
          <div>
            Real-Time Apps
            <small>CRDT · WebSocket</small>
          </div>
        </motion.div>
        <motion.div className="hero-chip chip-2" {...float(1.2)}>
          <span className="chip-ico">
            <Icon.agents width={18} height={18} />
          </span>
          <div>
            Developer Tooling
            <small>TypeScript CLIs</small>
          </div>
        </motion.div>
        <motion.div className="hero-chip chip-3" {...float(2.1)}>
          <span className="chip-ico">
            <Icon.voice width={18} height={18} />
          </span>
          <div>
            AI & Vision
            <small>Python · OpenCV</small>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </header>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section className="stats">
      <Reveal className="stats-grid" variants={stagger}>
        {stats.map((s) => (
          <motion.div className="stat" key={s.label} variants={fadeUp}>
            <div className="stat-value grad-text">
              <CountUp value={s.value} />
            </div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const frameRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <Reveal className="about-media" variants={fadeUp}>
          <div className="about-frame" ref={frameRef}>
            <div className="about-glow" />
            <motion.div className="about-parallax" style={{ y: photoY }}>
              <img src={about.photo} alt={about.photoAlt} className="about-photo" />
            </motion.div>
          </div>
          <motion.div
            className="about-badge"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about-badge-num grad-text">6</span>
            <span className="about-badge-label">
              open-source
              <br />
              projects shipped
            </span>
          </motion.div>
        </Reveal>

        <Reveal className="about-body" variants={stagger}>
          <motion.span className="eyebrow" variants={fadeUp}>
            About me
          </motion.span>
          <motion.h2 className="section-title about-title" variants={fadeUp}>
            {about.heading}
          </motion.h2>
          {about.paragraphs.map((p, i) => (
            <motion.p className="about-text" key={i} variants={fadeUp}>
              {p}
            </motion.p>
          ))}
          <motion.ul className="about-list" variants={fadeUp}>
            {about.highlights.map((h) => (
              <li key={h}>
                <Icon.arrow width={16} height={16} />
                {h}
              </li>
            ))}
          </motion.ul>
          <motion.div className="about-actions" variants={fadeUp}>
            <Magnetic className="btn btn-primary" href="#contact">
              Let's work together <Icon.arrow width={18} height={18} />
            </Magnetic>
            <Magnetic className="btn btn-ghost" href="#work" strength={0.25}>
              See my work
            </Magnetic>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Tilt service card ---------------- */
function TiltCard({ service }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 12 });
  const sry = useSpring(ry, { stiffness: 150, damping: 12 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 14);
    rx.set((0.5 - py) * 14);
    ref.current.style.setProperty("--gx", `${px * 100}%`);
    ref.current.style.setProperty("--gy", `${py * 100}%`);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
  };
  const IconEl = Icon[service.icon] || Icon.bolt;
  return (
    <motion.article
      ref={ref}
      className="card"
      variants={fadeUp}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX: srx, rotateY: sry }}
    >
      <span className="card-glare" />
      <div className="card-inner">
        <div className="service-icon">
          <IconEl width={27} height={27} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <div className="tag-row">
          {service.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section className="section" id="services">
      <SectionHead
        eyebrow="What I do"
        sub="From first prototype to production — full-stack products, real-time systems, and developer tools."
      >
        What I <span className="grad-text">build</span>
      </SectionHead>
      <Reveal className="services-grid" variants={stagger}>
        {services.map((s) => (
          <TiltCard service={s} key={s.title} />
        ))}
      </Reveal>
    </section>
  );
}

/* ---------------- Project card (tilt + image reveal + parallax) ---------------- */
function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 14 });
  const sry = useSpring(ry, { stiffness: 150, damping: 14 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    rx.set((0.5 - (e.clientY - r.top) / r.height) * 8);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      variants={fadeUp}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX: srx, rotateY: sry }}
    >
      <div className="project-media">
        <motion.div className="project-parallax" style={{ y: imgY }}>
          <img className="project-img" src={project.image} alt={project.title} loading="lazy" />
        </motion.div>
        <span className="project-overlay" />
        <span className="project-cat">{project.category}</span>
        <span className="project-view">
          <Icon.arrow width={20} height={20} />
        </span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <section className="section" id="work">
      <SectionHead
        eyebrow="Selected work"
        sub="A few systems I've designed and shipped end to end."
      >
        Featured <span className="grad-text">projects</span>
      </SectionHead>
      <Reveal className="projects-grid" variants={stagger}>
        {projects.map((p) => (
          <ProjectCard project={p} key={p.title} />
        ))}
      </Reveal>
    </section>
  );
}

/* ---------------- Tech marquee ---------------- */
function Marquee({ items, variant }) {
  const list = [...items, ...items];
  return (
    <div className={`marquee marquee-${variant}`}>
      <div className="marquee-track">
        {list.map((t, i) => (
          <span className="tech-pill" key={i}>
            <i />
            {t.name}
            <small>{t.group}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
function TechStack() {
  const half = Math.ceil(techStack.length / 2);
  const rowA = techStack.slice(0, half);
  const rowB = techStack.slice(half);
  return (
    <section className="section" id="stack">
      <SectionHead
        eyebrow="Tech & Tools"
        sub="The tools I reach for to design, build, and automate."
      >
        My <span className="grad-text">stack</span>
      </SectionHead>
      <Reveal variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Marquee items={rowA} variant={1} />
        <Marquee items={rowB} variant={2} />
      </Reveal>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function Contact() {
  return (
    <section className="cta" id="contact">
      <Reveal className="cta-box">
        <span className="eyebrow">Let's talk</span>
        <h2>
          Let's build <span className="grad-text">something.</span>
        </h2>
        <p>
          Have a product to ship, a system to scale, or a tool to build? I'm open to new
          projects and collaborations — reach out on LinkedIn or take a look at my code.
        </p>
        <div className="cta-actions">
          <Magnetic
            className="btn btn-primary"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Icon.mail width={18} height={18} /> Connect on LinkedIn
          </Magnetic>
          <Magnetic
            className="btn btn-ghost"
            href={links.github}
            target="_blank"
            rel="noreferrer"
            strength={0.25}
          >
            View GitHub
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="nav-logo" style={{ width: 28, height: 28, fontSize: 13 }}>
            ◆
          </span>
          Muhammad Ali
        </div>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div>© 2026 · {profile.name}</div>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Aurora />
      <CursorGlow />
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />

      <main>
        <Hero ready={!loading} />
        <Stats />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
