import React from 'react';
import "./ThemeSwitch.css";

const ThemeSwitch = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="nav__btns theme-switch">
      <i className={`uil ${isDarkMode ? 'uil-sun' : 'uil-moon'} nav__icon`}></i>
      <span className="theme-switch__text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeSwitch;