import React, { Component } from 'react';
import { Button, ControlLabel,  FormControl, HelpBlock} from 'react-bootstrap';
import { graphRequest } from '../graphRequest';
import { makeQuery } from '../makeQuery';

class RideForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      "driverName": this.props.data.driverName,
      "clientName": this.props.data.clientName,
      "rideState": this.props.data.rideState,
      "amount": this.props.data.amount,
      "startLat": this.props.data.startLocation.lat,
      "startLng": this.props.data.startLocation.lng,
      "destLat": this.props.data.destination.lat,
      "destLng": this.props.data.destination.lng
    };
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges() {
    // revisar si el cliente agrego el signo de peso en amount, si no, entonces lo agrega
    const ride = {
      "id": this.props.data.id, 
      "clientName": this.state.clientName,
      "driverName": this.state.driverName,
      "rideState": this.state.rideState,
      "amount": this.state.amount,
      "startLocation": {lat: this.state.startLat, lng: this.state.startLng},
      "destination": {lat: this.state.destLat, lng: this.state.destLng}
    }

    const query = makeQuery("mutation", "editRide", null, {ride}, ["$ride: RideEditInput!"]); 
    graphRequest("graphql", query).then(() => this.props.close());
  }

  render() {
    const data = this.props.data;
    return(
      <form>
        <ControlLabel>Driver Name</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.driverName}
          onChange={(e) => this.setState({"driverName": e.target.value})}
        />
        <ControlLabel>Client Name</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.clientName}
          onChange={(e) => this.setState({"clientName": e.target.value})}
        />
        <ControlLabel>Ride State</ControlLabel>
        <FormControl 
          componentClass="select" 
          defaultValue={data.rideState}
          onChange={(e) => this.setState({"rideState": e.target.value})}>
          <option value="active">active</option>
          <option value="finished">finished</option>
          <option value="canceled">canceled</option>
        </FormControl>
        <ControlLabel>Amount</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.amount}
          onChange={(e) => this.setState({"amount": e.target.value})}
        />
        <ControlLabel>Start Location</ControlLabel>
        <div className="flex-center-row">
          <FormControl
            type="text"
            placeholder="Latitude"
            defaultValue={data.startLocation.lat} 
            onChange={(e) => this.setState({"startLat": e.target.value})}
            style={{width: "100px", marginRight: "2px"}}
          />
          <FormControl
            type="text"
            placeholder="Longitud"
            defaultValue={data.startLocation.lng} 
            onChange={(e) => this.setState({"startLng": e.target.value})}
            style={{"width": "100px"}}    
          />
        </div>
        <ControlLabel>Destination</ControlLabel>
        <div className="flex-center-row">
          <FormControl
            type="text"
            placeholder="Latitude"
            defaultValue={data.destination.lat} 
            onChange={(e) => this.setState({"destLat": e.target.value})}
            style={{width: "100px", marginRight: "2px"}}
          />
          <FormControl
            type="text"
            placeholder="Longitud"
            defaultValue={data.destination.lng} 
            onChange={(e) => this.setState({"destLng": e.target.value})}
            style={{"width": "100px"}}    
          />
        </div>
        <HelpBlock>(Locations are defined as latitude and longitud coordinates)</HelpBlock>
        <div style={{textAlign: "center", marginTop: "10px"}}>
          <Button onClick={() => this.props.close()} style={{marginRight: "2px"}}>Cancel</Button>
          <Button onClick={() => this.saveChanges()} className="main-btn">Save Changes</Button>
        </div>
      </form>
    );
  }
}

export default RideForm;