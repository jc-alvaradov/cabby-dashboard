import React, { Component } from "react";
import { Button, ControlLabel, FormControl, HelpBlock } from "react-bootstrap";
import { graphRequest } from "../graphRequest";
import { makeQuery } from "../makeQuery";

class DriverForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverName: this.props.data.driverName,
      photo: this.props.data.photo,
      phone: this.props.data.phone,
      carModel: this.props.data.carModel,
      carPlate: this.props.data.carPlate,
      active: this.props.data.active,
      payment: this.props.data.payment,
      locationLat: this.props.data.location.lat,
      locationLng: this.props.data.location.lng
    };
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges() {
    // revisar si el cliente agrego el signo de peso en amount, si no, entonces lo agrega
    const driver = {
      id: this.props.data.id,
      driverName: this.state.driverName,
      photo: this.state.photo,
      phone: this.state.phone,
      carModel: this.state.carModel,
      carPlate: this.state.carPlate,
      active: this.state.active,
      payment: this.state.payment,
      location: { lat: this.state.locationLat, lng: this.state.locationLng }
    };
    const query = makeQuery("mutation", "editDriver", null, { driver }, [
      "$driver: DriverEditInput!"
    ]);
    console.log("QUERY:" + JSON.stringify(query));
    graphRequest("graphql", query).then(() => this.props.close());
  }

  render() {
    const data = this.props.data;
    return (
      <form>
        <ControlLabel>Driver Name</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.driverName}
          onChange={e => this.setState({ driverName: e.target.value })}
        />
        <ControlLabel>Photo</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.photo}
          onChange={e => this.setState({ photo: e.target.value })}
        />
        <ControlLabel>Phone Number</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.phone}
          onChange={e => this.setState({ phone: e.target.value })}
        />
        <ControlLabel>Payment Method</ControlLabel>
        <FormControl
          componentClass="select"
          defaultValue={data.payment}
          onChange={e => this.setState({ payment: e.target.value })}
        >
          <option value="cash">cash</option>
          <option value="paypal">paypal</option>
        </FormControl>
        <ControlLabel>Car Model</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.carModel}
          onChange={e => this.setState({ carModel: e.target.value })}
        />
        <ControlLabel>Car Plate</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.carPlate}
          onChange={e => this.setState({ carPlate: e.target.value })}
        />
        <ControlLabel>State</ControlLabel>
        <FormControl
          componentClass="select"
          defaultValue={data.active}
          onChange={e => this.setState({ active: e.target.value })}
        >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </FormControl>
        <ControlLabel>Current Location</ControlLabel>
        <div className="flex-center-row">
          <FormControl
            type="text"
            placeholder="Latitude"
            defaultValue={data.location.lat}
            onChange={e => this.setState({ locationLat: e.target.value })}
            style={{ width: "100px", marginRight: "2px" }}
          />
          <FormControl
            type="text"
            placeholder="Longitude"
            defaultValue={data.location.lng}
            onChange={e => this.setState({ locationLng: e.target.value })}
            style={{ width: "100px", marginRight: "2px" }}
          />
        </div>
        <HelpBlock>
          (Locations are defined as latitude and longitud coordinates)
        </HelpBlock>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button
            onClick={() => this.props.close()}
            style={{ marginRight: "2px" }}
          >
            Cancel
          </Button>
          <Button onClick={() => this.saveChanges()} className="main-btn">
            Save Changes
          </Button>
        </div>
      </form>
    );
  }
}

export default DriverForm;
