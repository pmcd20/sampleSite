// App.js
import React from 'react';
import Nav from './components/nav';
import Services from './components/services';
import Main from './components/main';
import Pricing from './components/pricing';
import Contact from './components/contact';




import './index.css';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
