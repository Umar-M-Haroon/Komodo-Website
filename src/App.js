import React from 'react';
import logo from './logo.png';
import ipad from './ipad.png';
import iphone from './iphone.png';
import mac from './mac.png';
import finale from './finale.png';
import harbor from './harbor.png';
import homely from './homely.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#414141" }}>
        <img src={logo} className="Nav-Logo" width="60" height="66" alt="logo" ></img>
        <a className="navbar-brand">Komodo LLC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <h2>People First Software</h2>
        <p>Software on iOS, macOS, and Web that respects people's privacy</p>
        <div className="Mockups">
          <img src={mac} className="Mac" alt="logo" />
          <img src={iphone} className="Mockups" alt="logo" />
          <img src={ipad} className="Mockups" alt="logo" />
          <h1>Our Apps</h1>
          <div className="Previews">
            <div className="App-Preview">
              <a href="https://harbor.komodollc.com"><img src={harbor} className="App-Preview" alt="logo" /></a>
              <a href="https://harbor.komodollc.com">Harbor</a>
            </div>
            <div className="App-Preview">
              <a href="https://homely.komodollc.com"><img src={homely} className="App-Preview" alt="logo" /></a>
              <a href="https://homely.komodollc.com">Homely</a>
            </div>
            <div className="App-Preview">
              <a href="https://finale.komodollc.com"><img src={finale} className="App-Preview" alt="logo" /></a>
              <a href="https://finale.komodollc.com">Finale</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
