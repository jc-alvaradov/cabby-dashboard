import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import ModalWindow from "./modalWindow";

class RideMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      origin: new google.maps.LatLng(
        this.props.start.lat,
        this.props.start.lng
      ),
      destination: new google.maps.LatLng(
        this.props.dest.lat,
        this.props.dest.lng
      ),
      directions: null
    };
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: this.state.origin,
        destination: this.state.destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const LocationMap = withGoogleMap(props =>
      <GoogleMap defaultZoom={18} defaultCenter={this.state.origin}>
        {this.state.directions &&
          <DirectionsRenderer directions={this.state.directions} />}
      </GoogleMap>
    );

    return (
      <div>
        <Button onClick={() => this.setState({ show: !this.state.show })}>
          Show Ride on Map
        </Button>
        <ModalWindow
          title="Ride Map"
          show={this.state.show}
          close={this.close}
          content={
            <LocationMap
              containerElement={<div className="location-map" />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          }
        />
      </div>
    );
  }

  close() {
    this.setState({ show: false });
  }
}

export default RideMap;
