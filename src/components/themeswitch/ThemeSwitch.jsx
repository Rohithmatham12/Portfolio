import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    });
  
    useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-switch">
      <i className={`uil ${isDarkMode ? 'uil-sun' : 'uil-moon'}`}></i>
    </button>
  );
};

export default ThemeSwitch;