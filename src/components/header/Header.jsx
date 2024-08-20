import React, { useState } from "react";
import "./header.css";
import ThemeSwitch from "../themeswitch/ThemeSwitch";



const Header = ({ isDarkMode, toggleTheme }) => {
    /* ===== Change Background Header ===== */
    window.addEventListener("scroll", function () { const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add 
        ("show-header");
        else header.classList.remove("scroll-header");
    });
    /* ===== Toggle Menu ===== */
    // const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    /*const [isDarkMode, setIsDarkMode] = useState(false);*/

    useEffect(() => {
        const header = document.querySelector(".header");
        const scrollHeader = () => {
            if (window.scrollY >= 80) {
                header.classList.add("show-header");
            } else {
                header.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", scrollHeader);

        return () => window.removeEventListener("scroll", scrollHeader);
    }, []);

    // useEffect(() => {
    //     document.body.classList.toggle('dark-mode', isDarkMode);
    // }, [isDarkMode]);

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    return (
        <header className="header">
          <nav className="nav container">
            <a href="index.html" className="nav__logo">Strike</a>
            
            <div className="nav__menu">
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
              </ul>
            </div>
            
            <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </nav>
        </header>
      );
    };
    
    export default Header;