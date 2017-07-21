import React, { Component } from 'react';
import RidesMenu from './ridesMenu';
import Loading from './loading';
import { graphRequest } from './graphRequest';

class Rides extends Component{
  constructor(props){
    super(props);
    this.state = {
      "loading": "true",
      "rides": []
    };
  }

  componentDidMount(){
    graphRequest("graphql", { 
      "query": "query { getAllRides{ rideId driverName clientName amount startLocation{ lat lng } destination{ lat lng } rideState cancelReason rating } }"
    }).then(res => {
      if(!res){
        return;
      }
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