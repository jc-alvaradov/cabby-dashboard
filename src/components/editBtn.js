import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ModalWindow from "./modalWindow";
import RideForm from "./forms/rideForm";
import DriverForm from "./forms/driverForm";
import ClientForm from "./forms/clientForm";

class EditBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.close = this.close.bind(this);
  }
  render() {
    let content;
    switch (this.props.type) {
      case "rides":
        content = <RideForm data={this.props.data} close={this.close} />;
        break;
      case "drivers":
        content = <DriverForm data={this.props.data} close={this.close} />;
        break;
      case "clients":
        content = <ClientForm data={this.props.data} close={this.close} />;
        break;
      default:
        content = null;
    }

    return (
      <div>
        <Button onClick={() => this.setState({ show: !this.state.show })}>
          Edit
        </Button>
        <ModalWindow
          show={this.state.show}
          title="Edit"
          size={"small"}
          close={this.close}
          content={content}
        />
      </div>
    );
  }

  close() {
    this.props.reload();
    this.setState({ show: false });
  }
}

export default EditBtn;
