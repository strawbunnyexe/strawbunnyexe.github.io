import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './themes.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save theme on change
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<><Hero /><About /><Skills /><Projects /><Contact /></>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
