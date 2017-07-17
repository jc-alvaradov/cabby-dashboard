import React, { Component } from 'react';
import ActiveRide from './activeRide';
import { Button } from 'react-bootstrap';

class Rides extends Component{
  constructor(props){
    super(props);
  }

  render(){
    //Hacer peticion a graphql por todos los rides activos
    let activeRides = [];
    if(activeRides.length > 0){
      activeRides.map((ride) => {
        return <ActiveRide ride={ride} />;
      });
    }else{
      activeRides = "No rides right now...";
    }
    return(
      <div>
        <div className="title"><h1>Rides Menu</h1></div>
        {activeRides}
        <Button bsStyle="success">Success</Button>
      </div>
    );
  }
}

export default Rides;