// App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Nav from './components/nav';
import Services from './components/services';
import Main from './components/main';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';
import Settings from './components/settings';

import './index.css';


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection /> {/* Scroll to section handler */}
      <Routes>
        {/* Main Page (Home) with all sections */}
        <Route
          path="/"
          element={
            <>
              <Nav />   {/* Navigation stays visible */}
              <Main />  {/* Main content */}
              <Services id="services" />  {/* Services section */}
              <Pricing id="pricing" />  {/* Pricing section */}
              <Contact id="contact" />  {/* Contact section */}
              <Footer />  {/* Footer stays visible */}
            </>
          }
        />

        {/* Settings Page with Nav and Footer */}
        <Route
          path="/settings"
          element={
            <>
              <Nav />   {/* Navigation stays visible */}
              <Settings />  {/* Settings page content */}
              <Footer />  {/* Footer stays visible */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
