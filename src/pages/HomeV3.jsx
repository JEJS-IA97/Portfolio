import { useEffect, useState } from "react";
import "../styles/homev3.css";
import { portraitImg, aboutImg, skills, projects, experience } from "../data/content.jsx";
import useScrollSpy from "../hooks/useScrollSpy";

const Arrow = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => { setOpen(false); scrollTo(id); };
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Principal">
      <div className="nav-in">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); go("top"); }}>José <em>Jiménez</em></a>
        <div className="nav-links">
          <a href="#about" className={active === "about" ? "active" : ""} onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
          <a href="#skills" className={active === "skills" ? "active" : ""} onClick={(e) => { e.preventDefault(); go("skills"); }}>Skills</a>
          <a href="#work" className={active === "work" ? "active" : ""} onClick={(e) => { e.preventDefault(); go("work"); }}>Work</a>
          <a href="#experience" className={active === "experience" ? "active" : ""} onClick={(e) => { e.preventDefault(); go("experience"); }}>Experience</a>
        </div>
        <button className="nav-cta" onClick={() => go("contact")}>Let&apos;s talk</button>
        <button className="burger" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="nav-mobile" onClick={() => setOpen(!open)}>
          {open
            ? <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /></svg>
            : <svg fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>}
        </button>
      </div>
      {open && (
        <div className="nav-mobile" id="nav-mobile">
          <a href="#about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); go("skills"); }}>Skills</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); go("work"); }}>Work</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); go("experience"); }}>Experience</a>
          <button className="nav-cta" onClick={() => go("contact")}>Let&apos;s talk</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);
  useEffect(() => {
    if (!cvOpen) return;
    const close = (e) => { if (!e.target.closest(".cv-wrap")) setCvOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [cvOpen]);
  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="wrap">
        <div>
          <div className="hero-kicker"><span className="dot"></span><span>Disponible para proyectos</span></div>
          <h1>Software<br /><em>Engineer</em> &amp;<br /><span className="thin">QA Automation</span></h1>
          <p className="hero-sub">Soy <b>José Jiménez</b>. Construyo y pruebo productos web con la misma mano: interfaces cuidadas con <b>React</b> y automatización E2E confiable con <b>Cypress</b> y <b>Playwright</b>.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">Ver proyectos <Arrow /></a>
            <div className="cv-wrap">
              <button className="btn btn-ghost" aria-expanded={cvOpen} aria-haspopup="true" onClick={() => setCvOpen(!cvOpen)}>
                Descargar CV
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
              </button>
              {cvOpen && (
                <div className="cv-menu">
                  <a href="/documents/CV_Developer_José_Jiménez.pdf" download onClick={() => setCvOpen(false)}>Developer</a>
                  <a href="/documents/CV_QA_José_Jiménez.pdf" download onClick={() => setCvOpen(false)}>QA Automation</a>
                  <a href="/documents/CV_Designer_José_Jiménez.pdf" download onClick={() => setCvOpen(false)}>Diseño UI/UX</a>
                </div>
              )}
            </div>
          </div>
          <div className="hero-meta">
            <div><span className="n">3+</span><span className="l">Años en diseño</span></div>
            <div><span className="n">2+</span><span className="l">Años en QA &amp; dev</span></div>
            <div><span className="n">12+</span><span className="l">Proyectos</span></div>
          </div>
        </div>
        <div className="portrait">
          <div className="portrait-frame"><img src={portraitImg} alt="Retrato de José Jiménez" /></div>
          <div className="portrait-badge">
            <span className="pulse" aria-hidden="true"></span>
            <p><b>Barquisimeto, VE</b>Abierto a oportunidades</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const About = () => (
  <section id="about">
    <div className="wrap">
      <div className="about-grid">
        <div className="about-txt rv">
          <span className="eyebrow">About</span>
          <h2>Donde la lógica<br />se encuentra con el <em>diseño</em></h2>
          <p>Ingeniero de software radicado en <span className="hl">Barquisimeto</span>, donde mezclo tres roles: <span className="hl">QA Automation Engineer</span>, <span className="hl">Frontend Developer</span> y <span className="hl">Diseñador UI</span>.</p>
          <p>Domino <em>React</em>, <em>TypeScript</em> y <em>Tailwind CSS</em> para interfaces modernas, y garantizo confiabilidad con suites E2E en <em>Cypress</em>, <em>Playwright</em> y <em>Postman</em>. Mi base en diseño con Figma me permite construir apps que no solo funcionan detrás, sino que <span className="hl">se sienten bien</span>.</p>
          <p>Fuera del teclado: gym, buena comida, videojuegos como Hogwarts Legacy y buenos thriller.</p>
        </div>
        <div className="about-photo rv"><img src={aboutImg} alt="José Jiménez en contexto de trabajo" /></div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="band">
    <div className="wrap">
      <div className="sec-head rv">
        <div><span className="eyebrow">What I do</span><h2>Skills &amp; <em>herramientas</em></h2></div>
      </div>
      <div className="bento">
        {skills.map((s) => (
          <div key={s.name} className="tile rv">
            <div className="ic" style={{ color: s.color }}><s.Icon aria-hidden="true" /></div>
            <div className="nm">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work">
    <div className="wrap">
      <div className="sec-head rv">
        <div><span className="eyebrow">Selected Work</span><h2>Proyectos <em>destacados</em></h2></div>
      </div>
      <div className="projects">
        {projects.map((p) => (
          <a key={p.title} className="proj rv" href={p.url} target="_blank" rel="noopener noreferrer">
            <div className="ph">
              {p.img ? <img src={p.img} alt={p.title} /> : <div className="ph-empty">{p.title.charAt(0)}</div>}
            </div>
            <div className="body">
              <div className="row"><h3>{p.title}</h3><span className="arrow"><Arrow /></span></div>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="band">
    <div className="wrap">
      <div className="exp-grid">
        <div className="exp-side rv">
          <span className="eyebrow">Experience</span>
          <h2>Trayectoria <em>profesional</em></h2>
          <p className="sum">Cinco años recorriendo las tres caras de un producto digital: lo diseñé, lo probé y lo construí — desde interfaces en Figma hasta suites E2E corriendo en producción.</p>
          <div className="exp-stats">
            <div><span className="n">5+</span><span className="l">Años de exp.</span></div>
            <div><span className="n">4</span><span className="l">Roles</span></div>
            <div><span className="n">3</span><span className="l">Empresas</span></div>
          </div>
        </div>
        <div className="tl">
          {experience.map((e) => (
            <article key={e.role} className="tl-item rv">
              <div className="when">{e.when}</div>
              <h3>{e.role}</h3>
              <div className="co">{e.co}</div>
              <p>{e.desc}</p>
              <div className="tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <div className="wrap">
      <div className="contact rv">
        <h2>¿Trabajamos<br /><em>juntos</em>?</h2>
        <p>Está abierto a oportunidades y proyectos interesantes. Si buscas a alguien que cubra QA, frontend y diseño, hablemos.</p>
        <a className="btn btn-primary" href="mailto:jose.e.jimenez.1411@gmail.com">Escríbeme un email <Arrow /></a>
        <div className="socials">
          <a href="https://linkedin.com/in/jejs97" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
          <a href="https://github.com/JEJS-IA97" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
          <a href="https://wa.me/584145017060" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" /></svg></a>
          <a href="mailto:jose.e.jimenez.1411@gmail.com" aria-label="Email"><svg fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="wrap foot-in">
      <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>José <em>Jiménez</em></a>
      <span>© 2026 — Designed &amp; built with passion.</span>
    </div>
  </footer>
);

const ToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`to-top${show ? " show" : ""}`} onClick={() => scrollTo("top")} aria-label="Subir al inicio">
      <svg fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
};

const HomeV3 = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px" }
    );
    document.querySelectorAll(".v3 .rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="v3">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ToTop />
    </div>
  );
};

export default HomeV3;
