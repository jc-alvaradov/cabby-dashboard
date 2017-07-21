import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, } from 'react-google-maps';

class LocationModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const LocationMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) }}
      />
    ));


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