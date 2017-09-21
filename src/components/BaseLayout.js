import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{
  render(){
    //potential inline styling?
    return(
      <div>

      <div className="App-header">
      <h2>
      <NavLink activeClassName="selected" className="App-Link" exact to="/">Splash Page</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/home">Home</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/portfolio">Portfolio</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/about">About</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/contacts">Contacts</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/references">References</NavLink>
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
