// App.js
import React from 'react';
import Nav from './components/nav'; // Import Nav component
import './index.css';

function App() {
  return (
    <div className="App">
       <Nav /> 
      <div className="text-center bg-red-50" style={{ color: 'green' }}>
        Nav Bar
      </div>
    </div>
  );
}

export default App;
