import React from 'react'

const WorkItems = ({item}) => {
  return (

      <div className="work_card" key={item.id}>
        {item.image ? (
          <img src={item.image} alt="" className='work_img'/>
        ) : (
          <div className={`work_tile ${item.tileClass}`}>
            <i className={item.icon}></i>
          </div>
        )}
        <h3 className="work_title">{item.title}</h3>
        {item.description && <p className="work_description">{item.description}</p>}
        <div className="work_links">
          <a href={item.link} className="work_button" target="_blank" rel="noopener noreferrer">
              Github <i className="bx bx-right-arrow-alt work_button-icon"></i>
          </a>
          {item.live && (
            <a href={item.live} className="work_button" target="_blank" rel="noopener noreferrer">
                Live Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </a>
          )}
        </div>
      </div>

  )
}

export default WorkItems
