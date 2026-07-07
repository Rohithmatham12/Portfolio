import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <div style={{ textAlign: 'center' }}>
        <h2 style = {{ fontSize: '36px' }} className='section_title'>Qualification</h2>
        <span className='section_subtitle'>My Personel Journey<br></br><br></br><br></br></span></div>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" 
                : "qualification_button button-flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" 
                : "qualification_button button-flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>


            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" 
                : "qualification_content "}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Masters in Computer Science</h3>
                            <span className="qualification_subtitle">California State University-DH</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Aug 2023 - May 2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Bachelors in Computer Science</h3>
                            <span className="qualification_subtitle">JNTU-Hyderabad</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022
                            </div>
                        </div>
                        
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Intermediate</h3>
                            <span className="qualification_subtitle">Sri Chaitanya Junior College</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">High School</h3>
                            <span className="qualification_subtitle">Sri Chaitanya High School</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2016
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active"
                : "qualification_content "}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Graduate Student Assistant</h3>
                            <span className="qualification_subtitle">Loker Student Union</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Apr 2024 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Blockchain &amp; Web3 Security Research Extern</h3>
                            <span className="qualification_subtitle">Webacy Inc. (via Extern), Remote</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Aug 2024 - Sep 2024
                            </div>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Full Stack Developer Intern</h3>
                            <span className="qualification_subtitle">Site Service Software, Remote</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Aug 2024 - Oct 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Software Engineer</h3>
                            <span className="qualification_subtitle">Infosys</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Dec 2022 - Jul 2023
                            </div>
                        </div>

                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">AWS Cloud - Virtual Internship</h3>
                            <span className="qualification_subtitle">AWS &amp; AICTE</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> Jul 2021 - Dec 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Qualification
