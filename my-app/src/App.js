import React from "react";
import skier from "./images/skier.svg";
import logo from "./images/logo.svg";

import { About } from "./about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About />
      <header className="App-header">
        <img src={skier} className="skier" alt="skier" />
        <img src={logo} className="logo" alt="logo" />
        <p>COMING SOON!</p>
      </header>
      <footer className="footer" />
    </div>
  );
}

export default App;
