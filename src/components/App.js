import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Portfolio from './Portfolio';
import About from './About';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;


{/*      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>  */}
