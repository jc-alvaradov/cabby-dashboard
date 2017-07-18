import React, { Component } from 'react';
import axios from 'axios';
import RidesMenu from './menu/ridesMenu';
import Loading from './menu/loading';
//import { RidesMenu, Loading } from './menu';

class Rides extends Component{
  constructor(props){
    super(props);
    this.state = {
      "loading": "true",
      "rides": []
    };
  }

  componentDidMount(){
    // hacer el fetch de los rides de forma asincrona
    // cuando respondan cambiamos loading a false
    // acuerdate de content-type: app/json
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('http://localhost:3000/graphql', {
      "query": "query { getAllRides{ driverName clientName amount startLocation destination rideState cancelReason rating } }"
    }).then(res => {
      this.setState({ rides: res.data.data.getAllRides });
      this.setState({ loading: false });
    });
  }

  render(){
    if(this.state.loading){
      return <Loading />
    }

    return <RidesMenu rides={this.state.rides} />;
  }
}

export default Rides;