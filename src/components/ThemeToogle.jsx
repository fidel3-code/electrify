import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  // Initialize state from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply the theme to the <html> tag
    document.documentElement.setAttribute('data-bs-theme', theme);
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="btn btn-outline-secondary rounded-circle p-2"
      style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun className="text-warning" />}
    </button>
  );
};

export default ThemeToggle;
