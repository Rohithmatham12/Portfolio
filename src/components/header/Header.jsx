import React, { useState, useEffect } from "react";
import "./header.css";
import ThemeSwitch from "../themeswitch/ThemeSwitch";

const Header = ({ isDarkMode, toggleTheme }) => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const header = document.querySelector(".header");
        const scrollHeader = () => {
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", scrollHeader);
        return () => window.removeEventListener("scroll", scrollHeader);
    }, []);

    return (
        <header className="header">
          <nav className="nav container">
            <a href="index.html" className="nav__logo">Strike</a>
            
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                    Portfolio
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                    Contact
                  </a>
                </li>

                <li className="nav__item">
                   <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                </li>

                
              </ul>

              <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
              <i class="uil uil-apps"></i>
            </div>
            
            
          </nav>
        </header>
      );
    };
    
    export default Header;