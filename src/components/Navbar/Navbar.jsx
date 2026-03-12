import {React, useState}from 'react'
import './Navbar.css'



export const Navbar = ( {CONTENT,lang, setLang}) => {


const [scrolled] = useState(false);
  const t = CONTENT[lang]
 const scrollTo = (id) =>
 document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
   <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <button className="nav-pill" onClick={() => scrollTo("hero")}>Portfolio</button>
          <div style={{ display: "flex", gap: "1.5rem" }} className="nav-mid">
            {[["about", lang === "fr" ? "À propos" : "About"],
              ["skills", lang === "fr" ? "Compétences" : "Skills"],
              ["projects", lang === "fr" ? "Projets" : "Projects"],
              ["experience", lang === "fr" ? "Expérience" : "Experience"],
              ["contact", "Contact"]].map(([id, label]) => (
              <span key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <button className={`lang-btn${lang === "fr" ? " active" : ""}`} onClick={() => setLang("fr")}>FR</button>
         <button className="cv-btn" onClick={() => window.open(
  lang === "fr" ? "/CV_Yasmine_FR.pdf" : "/CV_Yasmine_EN.pdf", "_blank"
)}>
  📄 {t.viewCV}
</button>
        </div>
      </nav>
      </>
  )
}
