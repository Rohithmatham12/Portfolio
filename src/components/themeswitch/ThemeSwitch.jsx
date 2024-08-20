import React from 'react';
import "./ThemeSwitch.css";

const ThemeSwitch = ({ isDarkMode, toggleTheme }) => {
    return (
      <button onClick={toggleTheme} className="theme-switch nav__link">
        <i className={`uil ${isDarkMode ? 'uil-sun' : 'uil-moon'}`}></i>
      </button>
    );
  };

export default ThemeSwitch;