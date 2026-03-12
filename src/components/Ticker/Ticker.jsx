import React, { useState } from 'react';
import './Ticker.css'

const initialValues = {
  name: "",
  email: "",
  message: "" 
}



export const Ticker = ({TECH_SKILLS}) => {
const TICKER_SKILLS = [...TECH_SKILLS, ...TECH_SKILLS];
//const [form, setForm] = useState(initialValues);

  return (
   <div className="ticker-wrap">
        <div className="ticker-inner">
          {TICKER_SKILLS.map((s, i) => (
            <span key={i} className="ticker-item">
              <img className="ticker-icon" src={s.icon} alt={s.name} />
              {s.name}
            </span>
          ))}
        </div>
      </div>
  )
}
