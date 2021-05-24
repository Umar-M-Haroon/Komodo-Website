import React from 'react';
import './App.css';
import MainScreen from './MainScreen';
import PrivacyScreen from './PrivacyScreen';
import TermsScreen from './TermsScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/Privacy" component={PrivacyScreen}>
            <PrivacyScreen />
          </Route>
          <Route path="/Terms" component={TermsScreen}>
            <TermsScreen />
          </Route>
          <Route>
            <MainScreen />
          </Route>
      </Router>
    </div>
  );
}

export default App;
