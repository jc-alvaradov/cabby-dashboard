import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class LocationModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = this.props.title ? this.props.title : "";
    return (
      <Modal
        show={this.props.show}
        bsSize={this.props.size}
        onHide={this.props.close}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex-center">
            {this.props.content}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LocationModal;
