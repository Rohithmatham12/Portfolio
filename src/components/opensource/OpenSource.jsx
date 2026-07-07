import React from 'react'
import "./opensource.css";
import { contributionsData } from './Data';

const OpenSource = () => {
  return (
    <section className="opensource section" id="open-source">
        <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px' }} className="section_title">Open Source</h2>
        <span className="section_subtitle">Merged Pull Requests</span><br></br><br></br><br></br><br></br></div>

        <div className="opensource_container container grid">
          {contributionsData.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="opensource_card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="opensource_header">
                <span className="opensource_org">{item.org}</span>
                <span className="opensource_repo">{item.repo}</span>
              </div>
              <p className="opensource_title">{item.title}</p>
              <span className="opensource_link">
                View PR <i className="bx bx-right-arrow-alt work_button-icon"></i>
              </span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://github.com/search?q=author%3ARohithmatham12+type%3Apr&type=pullrequests"
            target="_blank"
            rel="noopener noreferrer"
            className="opensource_all"
          >
            See all contributions on GitHub
          </a>
        </div>
    </section>
  )
}

export default OpenSource
