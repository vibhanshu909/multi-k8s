import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Fib Calculator version 2</h1>
            <div>
              <Route exact path='/' component={Fib} />
              <Route exact path='/otherpage' component={OtherPage} />
            </div>
          </header>9999
        </div>
      </Router>
    );
  }
}

export default App;
