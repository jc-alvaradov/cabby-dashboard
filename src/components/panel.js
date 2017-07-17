import React, { Component } from 'react';
import Rides from './rides';
import Drivers from './drivers';
import Clients from './clients';
import Ratings from './ratings';
import Settings from './settings';

class Panel extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let content;

    switch(this.props.active){
      case "Rides":
        content = <Rides />;
        break;
      case "Drivers":
        content = <Drivers />;
        break;
      case "Clients":
        content = <Clients />;
        break;
      case "Ratings":
        content = <Ratings />;
        break;
      case "Settings":
        content = <Settings />;
        break;          
      default: 
        content = <Rides />
    }

    return(
      <div className="panel">
        {content}
      </div>
    );
  }
}

export default Panel;