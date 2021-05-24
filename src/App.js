import React from 'react';
import './App.css';
import MainScreen from './MainScreen';
import PrivacyScreen from './PrivacyScreen';
import TermsScreen from './TermsScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Privacy">
            <PrivacyScreen />
          </Route>
          <Route path="/Terms">
            <TermsScreen />
          </Route>
          <Route>
            <MainScreen />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
