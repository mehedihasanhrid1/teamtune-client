import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

export default function Root() {
  const location = useLocation();
  const noShared = location.pathname.includes('login') || location.pathname.includes('register');
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location.pathname]);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);


  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      {noShared || <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}/>}
      <Outlet/>
      {noShared || <Footer/>}
    </div>
  )
}
