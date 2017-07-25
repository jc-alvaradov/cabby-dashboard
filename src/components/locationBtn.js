import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import ModalWindow from './modalWindow';

class LocationBtn extends Component{
  constructor(props){
    super(props);
    this.state = {"show": false};
    this.close = this.close.bind(this);
  }

  render(){
    const LocationMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) }}>
        <Marker position={{"lat": parseFloat(this.props.lat), "lng": parseFloat(this.props.lng)}} />
      </GoogleMap>
    ));

    return(
      <div>
        <Button onClick={() => this.setState({show: !this.state.show})}>Show Location</Button>
        <ModalWindow title="Map Location" show={this.state.show} close={this.close}
          content={
            <LocationMap
              containerElement={
                <div className="location-map" />
              }
              mapElement={
                <div style={{ height: '100%' }} />
              }
            />
          }
        />
      </div>
    );
  }
  
  close(){
    this.setState({show: false});
  }
}

export default LocationBtn;