import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Strike</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://github.com/Rohithmatham12" className="footer_social-link" target="_blank" rel="noopener noreferrer">
             <i class="ui uil-github-alt"> </i>
             </a>

            <a href="https://www.linkedin.com/in/rohith-matham/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-linkedin"> </i>
            </a>
            
            <a href="https://x.com/MathamRohith" className="footer_social-link" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-twitter"> </i>
            </a>

            </div>

            <span className="footer_copy">&#169; Strike. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
