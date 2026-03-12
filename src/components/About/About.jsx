import React, { useEffect, useRef, useState } from 'react'

export const About = ({t, PHOTO}) => {

   const [copied, setCopied] = useState(false);

   const copyEmail = () => {
    navigator.clipboard.writeText("adianiepene@yahoo.fr");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <section id="about" style={{ padding: "100px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "5rem", alignItems: "center", flexWrap: "wrap" }} className="about-grid">
          <Reveal>
            <div className="about-photo"><img src={PHOTO} alt="Yasmine" /></div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <p className="sec-label">{t.aboutLabel}</p>
              <h2 className="sec-title">{t.aboutTitle}</h2>
              <p style={{ marginTop: "1.5rem", fontSize: ".95rem", lineHeight: 1.9, color: "#555", fontFamily: "sans-serif", maxWidth: 520 }}>{t.aboutText}</p>
              <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="mailto:adianiepene@yahoo.fr" style={{ color: "#8B0000", fontFamily: "sans-serif", fontSize: ".9rem", fontWeight: 600 }}>✉ adianiepene@yahoo.fr</a>
                <button onClick={copyEmail} style={{ background: "#f5f0eb", border: "1px solid #e0d8d0", borderRadius: "999px", padding: "5px 14px", fontSize: ".78rem", fontFamily: "sans-serif", cursor: "pointer", color: "#666" }}>
                  {copied ? t.copied : t.copyEmail}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  )
}
