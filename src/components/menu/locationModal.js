import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, } from 'react-google-maps';

const LocationMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

class LocationModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{ this.props.title }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{ this.props.text }</p>
          <div className="flex-center">
            <div className="location-map">
              <LocationMap
                containerElement={
                  <div style={{ height: '100%' }} />
                }
                mapElement={
                  <div style={{ height: '100%' }} />
                }
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LocationModal;