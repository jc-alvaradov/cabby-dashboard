import React, { Component } from 'react';

class ActiveRide extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let ride = this.props.ride;
    
    return(
      <div className="active-ride">
        <span>{ride.driver}</span> 
        <span>{ride.carModel}</span>
        <span>{ride.carPatent}</span>
        <span>{ride.client}</span>
        <span>{ride.destination}</span>
        <button title="More info" />
      </div>
    );
  }
}

export default ActiveRide;