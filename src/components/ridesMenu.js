|import React, { Component } from "react";
import {
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  FormControl,
  Table,
  Image
} from "react-bootstrap";
import LocationModal from "./locationModal";

class RidesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sItem: "Active rides",
      showLocationModal: false,
      lat: "-34.397",
      lng: "150.644",
      title: "Default Title"
    };
    this.closeModal = this.closeModal.bind(this);
    this.deleteRide = this.deleteRide.bind(this);
  }

  closeModal() {
    this.setState({ showLocationModal: false });
  }

  deleteRide(rideId) {
    // mandamos una peticion con axios a nuestro servidor indicandole q elimine el ride
    console.log("Voy a eliminar: " + rideId);
  }

  render() {
    let content = "";

    if (!this.props.rides.length) {
      content = <tr>No rides found...</tr>;
    } else {
      content = this.props.rides.map(ride => {
        return (
          <tr key={ride.driverName + ride.clientName}>
            <td>
              <b>
                ${ride.amount}
              </b>
            </td>
            <td>
              {ride.driverName}
            </td>
            <td>
              {ride.clientName}
            </td>
            <td>
              <Button
                bsStyle="default"
                onClick={() =>
                  this.setState({
                    showLocationModal: !this.state.showLocationModal,
                    lat: ride.startLocation.lat,
                    lng: ride.startLocation.lng,
                    title: "Start Location"
                  })}
              >
                Show on map
              </Button>
            </td>
            <td>
              <Button
                bsStyle="default"
                onClick={() =>
                  this.setState({
                    showLocationModal: !this.state.showLocationModal,
                    lat: ride.destination.lat,
                    lng: ride.destination.lng,
                    title: "Destination"
                  })}
              >
                Show on map
              </Button>
            </td>
            <td>
              {ride.rideState}
            </td>
            <td>
              <Button
                bsStyle="danger"
                onClick={() => this.deleteRide(ride.rideId)}
              >
                <i className="icon-trash-empty" />Delete
              </Button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <LocationModal
          title={this.state.title}
          text="Conductor"
          close={this.closeModal}
          show={this.state.showLocationModal}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <div className="title">
          <h1>Rides Menu</h1>
        </div>
        <div className="search-box">
          <div className="search-options">
            <div>
              <b>List: </b>
              <DropdownButton
                bsStyle="default"
                title={this.state.sItem}
                id="show-dropdown"
              >
                <MenuItem
                  eventKey="active-rides"
                  onClick={() => this.setState({ sItem: "Active rides" })}
                  className={
                    this.state.sItem === "Active rides" ? "active" : ""
                  }
                >
                  Active Rides
                </MenuItem>
                <MenuItem
                  eventKey="finished-rides"
                  onClick={() => this.setState({ sItem: "Finished rides" })}
                  className={
                    this.state.sItem === "Finished rides" ? "active" : ""
                  }
                >
                  Finished Rides
                </MenuItem>
                <MenuItem
                  eventKey="canceled-rides"
                  onClick={() => this.setState({ sItem: "Canceled rides" })}
                  className={
                    this.state.sItem === "Canceled rides" ? "active" : ""
                  }
                >
                  Canceled Rides
                </MenuItem>
                <MenuItem
                  eventKey="all-rides"
                  onClick={() => this.setState({ sItem: "All rides" })}
                  className={this.state.sItem === "All rides" ? "active" : ""}
                >
                  All Rides
                </MenuItem>
              </DropdownButton>
            </div>
            <div>
              <FormControl
                id="rides-search-box"
                type="text"
                label="Text"
                placeholder="Search by client or driver name"
                className="input-search-box"
              />
              <Button className="main-btn">Search</Button>
            </div>
          </div>
          <div className="search-results">
            <Table striped bordered condensed hover className="results-table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Driver</th>
                  <th>Client</th>
                  <th>Start Location</th>
                  <th>Destination</th>
                  <th>State</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {content}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default RidesMenu;
