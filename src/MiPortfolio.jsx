import { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import {Footer} from './components/Footer/Footer';
import {Ticker} from './components/Ticker/Ticker';
import { About } from "./components/About/About";
import {ContactForm} from './components/ContactForm/ContactForm'


const PHOTO = "/yas.jpeg";
const PHOTO1 = "/avatar.png";


const TECH_SKILLS = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Azure",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
{ name: "Docker",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
{ name: "CosmosDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cosmosdb/cosmosdb-original.svg" },
{ name: "NoSQL",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SASS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Bootstrap",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "VS Code",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];


const CONTENT = {
  en: {
    subtitle: "Full-Stack Developer · Casino du Lac, Geneva 🇨🇭",
    tagline: "Ex-hospitality team leader. Now I craft code instead of menus.",
    available: "Full-Stack Developer at Casino du Lac · Based in Geneva",
    langs: "LANGUAGES SPOKEN",
    aboutLabel: "ABOUT",
    aboutTitle: "Who am I?",
    aboutText: "Full-Stack Developer at Casino du Lac, Geneva. Trained at SocraTech Academy (React, Node.js, MySQL), I build modern web applications with a strong focus on clean code and user experience. Former luxury hospitality team leader, I bring rigour, communication and adaptability. Trilingual — French, Spanish, English.",
    skillsLabel: "SKILLS",
    skillsTitle: "What I bring",
    techSkills: "Technical skills",
    softSkills: "Soft skills",
    soft: ["Team Leadership", "Customer Focus", "Communication", "Problem Solving", "Adaptability"],
    projectsLabel: "PROJECTS",
    projectsTitle: "What I've created",
    projectsSub: "A selection of projects I've worked on",
    expLabel: "EXPERIENCE",
    expTitle: "My journey",
    contactLabel: "CONTACT",
    contactTitle: "Let's talk",
    contactText: "Full-Stack Developer at Casino du Lac, based in Geneva. Feel free to reach out for collaborations or opportunities.",
    copyEmail: "Copy",
    copied: "Copied!",
    sendMsg: "Send message",
    msgSent: "Message sent! I'll get back to you soon.",
    namePh: "Your name",
    emailPh: "Your email",
    msgPh: "Your message",
    viewCV: "View CV",
    viewCode: "Code",
    live_demo: "Live Demo",
    eduLabel: "EDUCATION",
    eduTitle: "My training",
    errorMsg: "Something went wrong. Please try again.",
  },
  fr: {
    subtitle: "Développeuse Full-Stack · Casino du Lac, Genève 🇨🇭",
    tagline: "Ex-cheffe de rang. Maintenant je prescris du code à la place.",
    available: "Développeuse Full-Stack au Casino du Lac · Basée à Genève",
    langs: "LANGUES PARLÉES",
    aboutLabel: "À PROPOS",
    aboutTitle: "Qui suis-je ?",
    aboutText: "Développeuse Full-Stack au Casino du Lac à Genève. Formée à SocraTech Academy (React, Node.js, MySQL), je crée des applications web modernes avec une attention particulière au code propre et à l'expérience utilisateur. Ancienne responsable d'équipe en hôtellerie de luxe, j'apporte rigueur, communication et adaptabilité. Trilingue — français, espagnol, anglais.",
    skillsLabel: "COMPÉTENCES",
    skillsTitle: "Ce que j'apporte",
    techSkills: "Compétences techniques",
    softSkills: "Savoir-être",
    soft: ["Leadership d'équipe", "Orientation client", "Communication", "Résolution de problèmes", "Adaptabilité"],
    projectsLabel: "PROJETS",
    projectsTitle: "Ce que j'ai créé",
    projectsSub: "Quelques projets sur lesquels j'ai travaillé",
    expLabel: "EXPÉRIENCE",
    expTitle: "Mon parcours",
    contactLabel: "CONTACT",
    contactTitle: "Parlons-en",
    contactText: "Développeuse Full-Stack au Casino du Lac, basée à Genève. N'hésitez pas à me contacter pour toute collaboration ou opportunité.",
    copyEmail: "Copier",
    copied: "Copié !",
    sendMsg: "Envoyer",
    msgSent: "Message envoyé ! Je vous réponds bientôt.",
    namePh: "Votre nom",
    emailPh: "Votre email",
    msgPh: "Votre message",
    viewCV: "Voir CV",
    viewCode: "Code",
    live_demo: "Démo Live",
    eduLabel: "FORMATION",
    eduTitle: "Mon parcours académique",
    errorMsg: "Une erreur s'est produite. Réessayez.",
  }
};

const PROJECTS = [
  {
    title: 'CircularScore professional team project',
    date: '02/2026',
    desc: {
      en: 'Full-stack platform for tracking corporate Sustainable Development Goals. Team-based project developed with a real-world client.',
      fr: "Plateforme full-stack de suivi des Objectifs de Développement Durable en entreprise. Projet d'équipe développé avec un client réel.",
    },
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    emoji: '🌱',
    bg: '#e8f5e9',
    github: 'https://github.com/Yasmineadianie/CircularScore-professional_team_project',
    live_demo: 'https://www.youtube.com/watch?v=qmeBNp-i9XM&t=2072s',
  },
  {
    title: 'Fashion Fwd Picker',
    date: '2025 – Present',
    desc: {
      en: 'Outfit recommendation app based on current fashion trends and user preferences.',
      fr: 'Application de recommandation vestimentaire basée sur les tendances et les préférences utilisateur.',
    },
    tags: ['TypeScript', 'React', 'CSS3', 'API', 'Node.js', 'MySQL'],
    emoji: '👗',
    bg: '#fdf0f0',
    github: 'https://github.com/Yasmineadianie/FASHION_FWD_PICKER',
    live_demo: null,
  },
  {
    title: 'DevConnect',
    date: '12/2025',
    desc: {
      en: 'Social networking platform with real-time weather, character exploration and user authentication.',
      fr: 'Plateforme de réseau social avec météo temps réel, exploration de personnages et authentification.',
    },
    tags: ['React', 'Node.js', 'MySQL', 'REST API'],
    emoji: '🔗',
    bg: '#f0e8f5',
    github: 'https://github.com/Yasmineadianie/DevConnect_Project',
    live_demo: 'https://dev-connect-project-flax.vercel.app',
  },
  {
    title: 'TheFunCorner',
    date: '11/2025',
    desc: {
      en: 'Social network for gamers with Node.js/Express back-end and MySQL database.',
      fr: 'Réseau social pour gamers avec back-end Node.js/Express et base de données MySQL.',
    },
    tags: ['Node.js', 'Express', 'MySQL'],
    emoji: '🎮',
    bg: '#e8f0e8',
    github: 'https://github.com/Yasmineadianie/TheFunCorner-project',
    live_demo: 'https://www.youtube.com/watch?v=1il5BMUOyug&t=67s',
  },
];

const EXPERIENCE = [
  {
    role: { en: "Full-Stack Developer", fr: "Développeuse Full-Stack" },
    company: "Casino du Lac, Genève",
    period: "May 2026 – Present",
   items: {
  en: [
    "Front-end development with React in a professional team",
    "Back-end with Node.js, NoSQL databases (CosmosDB / Azure)",
    "Containerisation with Docker",
    "Game development features",
    "Agile methodology, Git version control",
  ],
  fr: [
    "Développement front-end React au sein d'une équipe professionnelle",
    "Back-end Node.js, bases de données NoSQL (CosmosDB / Azure)",
    "Conteneurisation avec Docker",
    "Développement de fonctionnalités gaming",
    "Méthodologie Agile, gestion de version Git",
  ],
},
  },
  {
    role: { en: "Team Leader", fr: "Team Leader" },
    company: "The Boho Club, Marbella",
    period: "Aug 2024 – Apr 2026",
    items: {
      en: ["Supervised luxury hotel staff across multiple service periods", "Staff training, coaching and guest relations"],
      fr: ["Supervision d'équipe en hôtel haut de gamme", "Formation, coaching et gestion des relations clients"],
    },
  },
  {
    role: { en: "Head Waitress", fr: "Chef de Rang" },
    company: "Los Naranjos Golf Club, Marbella",
    period: "Mar 2018 – Sep 2024",
    items: {
      en: ["Daily operations for an international clientele", "POS, cash handling, food hygiene compliance"],
      fr: ["Gestion quotidienne pour une clientèle internationale", "POS, encaissement, hygiène alimentaire"],
    },
  },
  {
    role: { en: "Medical Records Technician", fr: "Technicienne Dossiers Médicaux" },
    company: "Hospital Comarcal de la Axarquía",
    period: "May 2016 – Dec 2017",
    items: {
      en: ["Managed confidential medical records and clinical documentation"],
      fr: ["Gestion et archivage des dossiers cliniques confidentiels"],
    },
  },
];

const EDUCATION = [
  {
    degree: {
      en: "Full-Stack Web Developer Bootcamp",
      fr: "Formation Développeuse Full-Stack Web"
    },
    school: "SocraTech Academy",
    period: "09/2025 – 02/2026",
    desc: {
      en: "Intensive full-stack bootcamp — React, Node.js, Express, MySQL, Git, Agile/Scrum.",
      fr: "Formation intensive full-stack — React, Node.js, Express, MySQL, Git, Agile/Scrum."
    },
    icon: "💻"
  },
  {
    degree: {
      en: "Higher Technician – Environmental Chemistry",
      fr: "BTS Technicien Supérieur – Chimie Environnementale"
    },
    school: "Universidad Laboral, Málaga",
    period: "10/2010 – 07/2012",
    desc: {
      en: "Scientific rigour, lab methodology, technical documentation.",
      fr: "Rigueur scientifique, méthodologie de laboratoire, documentation technique."
    },
    icon: "🔬"
  }
];

function useInView(ref) {
  const [v, setV] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const v = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s` }}>
      {children}
    </div>
  );
}


 const MiPortfolio = () => {
  const [lang, setLang] = useState("fr");
  const t = CONTENT[lang];


  return (

    <div style={{ fontFamily: "'Georgia','Times New Roman',serif", background: "#f5f0eb", color: "#1a1a1a", minHeight: "100vh" }}>

   <Navbar CONTENT={CONTENT} lang={lang} setLang={setLang}/>

   <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 6% 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: "5rem", flexWrap: "wrap" }} className="hero-grid">
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ fontSize: ".88rem", color: "#8B0000", fontFamily: "sans-serif", fontWeight: 600, marginBottom: ".8rem" }}>{t.subtitle}</p>
            <h1 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-.02em" }}>
              Yasmine<br />ADIANIE<span style={{ color: "#8B0000" }}>.</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "#777", fontFamily: "sans-serif", fontStyle: "italic", marginTop: "1rem", lineHeight: 1.7 }}>{t.tagline}</p>
            <p style={{ fontSize: ".88rem", fontFamily: "sans-serif", marginTop: "1.2rem" }}>
              <span className="avail-dot" />{t.available}
            </p>
            <div style={{ marginTop: "1.8rem" }}>
              <p style={{ fontSize: ".7rem", letterSpacing: ".18em", fontFamily: "sans-serif", color: "#aaa", fontWeight: 700, marginBottom: ".8rem" }}>{t.langs}</p>
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                {[["🇫🇷","Français","C2"],["🇪🇸","Español","C2"],["🇬🇧","English","C1"]].map(([flag, name, level]) => (
                  <span key={name} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "999px", border: "1.5px solid #e0d8d0", background: "#fff", fontSize: ".82rem", fontFamily: "sans-serif" }}>
                    {flag} <strong>{name}</strong> <span style={{ color: "#8B0000", fontSize: ".72rem" }}>{level}</span>
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
              {[["✉","Email","mailto:adianiepene@yahoo.fr"],["in","LinkedIn","https://linkedin.com/in/yasmine-adianie"],["⌥","GitHub","https://github.com/Yasmineadianie"]].map(([icon, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "9px 18px", border: "1.5px solid #e0d8d0", borderRadius: "999px", fontSize: ".82rem", fontFamily: "sans-serif", background: "#fff", color: "#333", transition: "all .2s" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor="#8B0000"; e.currentTarget.style.color="#8B0000"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor="#e0d8d0"; e.currentTarget.style.color="#333"; }}>
                  <strong>{icon}</strong> {label}
                </a>
              ))}
            </div>
          </div>
          <div className="photo-frame">
            <img src={PHOTO1} alt="Yasmine Adianie Fotso Ngoulle" />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.2rem", background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)", borderTop: "1px solid #e8e0d8" }}>
              <p style={{ fontSize: ".78rem", fontFamily: "sans-serif", color: "#888" }}>React · Node.js · MySQL</p>
            </div>
          </div>
        </div>
      </section>

         <Ticker TECH_SKILLS={TECH_SKILLS}/>

        <About t={t} PHOTO={PHOTO}/>

      <section id="skills" style={{ padding: "100px 6%", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="sec-label">{t.skillsLabel}</p>
            <h2 className="sec-title">{t.skillsTitle}</h2>
          </Reveal>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="exp-grid">
            <Reveal delay={0.1}>
              <p style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: ".9rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#8B0000" }}>•</span> {t.techSkills}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                {TECH_SKILLS.map(s => (
                  <span key={s.name} className="skill-badge">
                    <img src={s.icon} alt={s.name} style={{ width: 20, height: 20, objectFit: "contain" }} />
                    {s.name}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: ".9rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#8B0000" }}>•</span> {t.softSkills}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                {t.soft.map(s => <span key={s} className="soft-badge">{s}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="education" style={{ padding: "100px 6%", background: "#f5f0eb" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <Reveal>
      <p className="sec-label">{t.eduLabel}</p>
      <h2 className="sec-title">{t.eduTitle}</h2>
    </Reveal>
    <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {EDUCATION.map((e, i) => (
        <Reveal key={i} delay={i * 0.12}>
          <div className="exp-card" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            <div style={{ fontSize: "2.5rem", flexShrink: 0, width: 56, height: 56,
              background: "#fdf0f0", borderRadius: 14, display: "flex",
              alignItems: "center", justifyContent: "center" }}>
              {e.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div className="exp-period">{e.period}</div>
              <div className="exp-role">{e.degree[lang]}</div>
              <div className="exp-company">{e.school}</div>
              <p style={{ fontSize: ".84rem", color: "#888", fontFamily: "sans-serif", lineHeight: 1.7, marginTop: ".5rem" }}>
                {e.desc[lang]}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <section id="projects" style={{ padding: "100px 6%", background: "#f5f0eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="sec-label">{t.projectsLabel}</p>
            <h2 className="sec-title">{t.projectsTitle}</h2>
            <p className="sec-sub">{t.projectsSub}</p>
          </Reveal>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="proj-grid">
            {PROJECTS.map((proj, i) => (
              <Reveal key={proj.title} delay={i * 0.12}>
                <div className="proj-card">
                  <div className="proj-img" style={{ background: proj.bg }}>{proj.emoji}</div>
                  <div className="proj-body">
                    <div className="proj-title">{proj.title}</div>
                    <div className="proj-date">{proj.date}</div>
                    <p className="proj-desc">{proj.desc[lang]}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1rem" }}>
                      {proj.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                    </div>
                    <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                      <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">↗ {t.viewCode}</a>
                      {proj.live_demo && (
                        <a href={proj.live_demo} target="_blank" rel="noreferrer" className="proj-link">▶ {t.live_demo}</a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section id="experience" style={{ padding: "100px 6%", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p className="sec-label">{t.expLabel}</p>
            <h2 className="sec-title">{t.expTitle}</h2>
          </Reveal>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="exp-grid">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="exp-card">
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-role">{e.role[lang]}</div>
                  <div className="exp-company">{e.company}</div>
                  <ul style={{ listStyle: "none" }}>
                    {e.items[lang].map((it, j) => <li key={j} className="exp-li">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactForm  t={t} />

   <Footer />

    </div>
  )
}


export default MiPortfolio;