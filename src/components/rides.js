import React, { Component } from 'react';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
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
    axios.post('http://localhost:3000/graphql', {
      "query": "query { getAllRides{ rideId driverName clientName amount startLocation{ lat lng } destination{ lat lng } rideState cancelReason rating } }"
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