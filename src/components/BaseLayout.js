import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    //potential inline styling?
    return(
      <div>

      <div className="App-header">
      <h2>
      <Link className="App-Link" to="/">Home</Link>
      <Link className="App-Link" to="/portfolio">Portfolio</Link>
      <Link className="App-Link" to="/about">About</Link>
      </h2>
      </div>

      {this.props.children}

      <footer className="App-footer">
      <span>copyright 2017</span>
      </footer>

      </div>


    )
  }
}
