import React from 'react';
import './Footer.css'

export const Footer = () => {



  return (
    <footer className="footer">
      <p>
        Designed & built by <span>Yasmine Adianie Fotso Ngoulle</span> ·{' '}
        {new Date().getFullYear()}
      </p>
      <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>React · CSS · Passion</p>
    </footer>
  );
}
