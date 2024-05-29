import React from 'react';
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className='work section' id='portfolio'>
        <div style={{ textAlign: 'center' }}>
        <h2 style = {{ fontSize: '36px' }} className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span><br></br><br></br><br></br><br></br></div>

        <Works />
    </section>
  )
}

export default Work
