import React, { Component } from 'react';

class Menu extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="menu">
        <span className="menu-title">Taxi-Native
        <br/>Admin Panel</span>
      </div>
    );
  }
}

export default Menu;