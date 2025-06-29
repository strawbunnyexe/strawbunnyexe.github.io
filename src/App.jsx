import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound.jsx';

import { ScrollContext } from './context/ScrollContext.jsx';

import './themes.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const scrollTarget = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll to element once Home has mounted
  useEffect(() => {
    if (location.pathname === '/' && scrollTarget.current) {
      const section = document.getElementById(scrollTarget.current);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      scrollTarget.current = null;
    }
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      scrollTarget.current = id;
      navigate('/');
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      <div className="App">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
