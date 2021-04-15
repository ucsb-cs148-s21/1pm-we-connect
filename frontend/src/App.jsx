import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentRes, setCurrentRes] = useState(0);

  useEffect(() => {
    fetch('/app-name').then(res => res.text()).then(data => {
      console.log(data);
      setCurrentRes(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to the {currentRes}
        </h1>
      </header>
    </div>
  );
}

export default App;
