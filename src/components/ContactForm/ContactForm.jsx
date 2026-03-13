import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from "@emailjs/browser";



const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;



const initialValues = {
  name: '',
  email: '',
  message: '',
};



export const ContactForm = ({t}) => {

const formRef = useRef();
const [form, setForm] = useState(initialValues);
const [sent, setSent] = useState(false);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 6%", background: "#f5f0eb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "5rem", flexWrap: "wrap" }}>

  
        <div style={{ flex: 1, minWidth: 260 }}>
          <p className="sec-label">{t.contactLabel}</p>
          <h2 className="sec-title">{t.contactTitle}</h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem", fontSize: ".88rem",
            fontFamily: "sans-serif", color: "#777", lineHeight: 1.8, maxWidth: 360 }}>
            {t.contactText}
          </p>
          {[
            { icon: "✉", val: "adianiepene@yahoo.fr",          href: "mailto:adianiepene@yahoo.fr" },
            { icon: "☎", val: "+34 664 584 141",                href: "tel:+34664584141" },
            { icon: "in", val: "linkedin.com/in/yasmine-adianie", href: "https://linkedin.com/in/yasmine-adianie" },
            { icon: "GH", val: "github.com/Yasmineadianie",       href: "https://github.com/Yasmineadianie" },
          ].map(c => (
            <a key={c.val} href={c.href} target="_blank" rel="noreferrer" className="contact-row">
              <div className="c-icon">{c.icon}</div>
              <span className="c-val">{c.val}</span>
              <span style={{ marginLeft: "auto", color: "#ccc", fontSize: ".8rem" }}>↗</span>
            </a>
          ))}
        </div>

    
        <div style={{ flex: 1, minWidth: 280 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem", background: "#fff",
              borderRadius: 18, border: "1.5px solid #e8c8c8" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
              <p style={{ color: "#8B0000", fontFamily: "sans-serif", fontWeight: 600 }}>
                {t.msgSent}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              <input
                className="form-input"
                name="from_name"
                placeholder={t.namePh}
                value={form.name}
                onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                required
              />
              <input
                className="form-input"
                name="from_email"
                type="email"
                placeholder={t.emailPh}
                value={form.email}
                onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                required
              />
              <textarea
                className="form-input"
                name="message"
                placeholder={t.msgPh}
                value={form.message}
                onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                required
              />

              {error && (
                <p style={{ color: "red", fontSize: ".82rem", fontFamily: "sans-serif" }}>
                  {t.errorMsg || "Une erreur s'est produite. Réessayez."}
                </p>
              )}

              <div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "⏳ Envoi..." : `${t.sendMsg} →`}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};