import React, { Component } from 'react';
import bioPhoto from '../img/bio-image-square.jpg';
export default class About extends Component{
  render(){
    return(
      <div className="App-Content">
      About Me!!!!
      <br/>
      <img src={bioPhoto} height="300px"alt=""/>
      <br/>
      About me: Human, Female 10/10
      <br/>
      Likes: Justin Timberlake, Coding, Eating Food.


      </div>
    )
  }
}
