import React, { useState } from 'react'

const SkillsItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "skills_accordion-item skills_accordion-open" : "skills_accordion-item"}>
      <div className="skills_accordion-header" onClick={() => setOpen(!open)}>
        <i className={item.icon}></i>
        <h3 className="skills_title">{item.title}</h3>
        <i className={open ? "bx bx-chevron-up skills_accordion-arrow" : "bx bx-chevron-down skills_accordion-arrow"}></i>
      </div>

      {open && (
        <ul className="skills_accordion-list">
          {item.items.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SkillsItem
