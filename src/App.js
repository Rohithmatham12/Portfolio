import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
/*import Services from './components/services/Services';*/
import Qualification from "./components/qualifications/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import ThemeSwitch from "./components/themeswitch/ThemeSwitch";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-HYQZTD31G3');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    // Apply dark mode class to body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <>
    <Header />
    <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    <main className='main'>
    <Home />
    <About />
    <Skills />
    {/*<Services />*/}
    <Qualification />
    <Work />
    <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
