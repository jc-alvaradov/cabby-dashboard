import React, { Component } from "react";
import { Button, ControlLabel, FormControl } from "react-bootstrap";
import { graphRequest } from "../graphRequest";
import { makeQuery } from "../makeQuery";

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: this.props.data.clientName,
      phone: this.props.data.phone,
      active: this.props.data.active,
      payment: this.props.data.payment
    };
    this.saveChanges = this.saveChanges.bind(this);
  }

  saveChanges() {
    const client = {
      id: this.props.data.id,
      clientName: this.state.clientName,
      phone: this.state.phone,
      active: this.state.active,
      payment: this.state.payment
    };
    const query = makeQuery("mutation", "editClient", null, { client }, [
      "$client: ClientEditInput!"
    ]);
    graphRequest("graphql", query).then(() => this.props.close());
  }

  render() {
    const data = this.props.data;
    return (
      <form>
        <ControlLabel>Client Name</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.clientName}
          onChange={e => this.setState({ clientName: e.target.value })}
        />
        <ControlLabel>Phone Number</ControlLabel>
        <FormControl
          type="text"
          defaultValue={data.phone}
          onChange={e => this.setState({ phone: e.target.value })}
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
        <ControlLabel>Payment Method</ControlLabel>
        <FormControl
          componentClass="select"
          defaultValue={data.payment}
          onChange={e => this.setState({ payment: e.target.value })}
        >
          <option value="cash">cash</option>
          <option value="paypal">paypal</option>
        </FormControl>
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

export default ClientForm;
