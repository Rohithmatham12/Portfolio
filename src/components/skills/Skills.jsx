import React from 'react';
import "./skills.css";
import { skillsData } from './Data';
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <div style={{ textAlign: 'center' }}>
        <h2 style = {{ fontSize: '36px' }} className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span><br></br><br></br><br></br><br></br></div>

      <div className="skills_container container">
        {skillsData.map((item) => (
          <SkillsItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Skills
