import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Panel from "./panel";
import MenuItem from "./menuItem";
import { graphRequest } from "./graphGetRequest";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "Rides" };
    this.changeState = this.changeState.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div
          className="menu"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch"
          }}
        >
          <div>
            <div className="menu-title">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TAXI.jpg/1200px-TAXI.jpg"
                width="120"
                height="120"
                circle
              />
              <br />
              <h1>Taxi Native</h1>
            </div>
            <MenuItem
              name="Rides"
              changeState={this.changeState}
              iconName="icon-cab"
              selected={this.state.active}
            />
            <MenuItem
              name="Drivers"
              changeState={this.changeState}
              iconName="icon-user-circle-o"
              selected={this.state.active}
            />
            <MenuItem
              name="Clients"
              changeState={this.changeState}
              iconName="icon-user"
              selected={this.state.active}
            />
            <MenuItem
              name="Ratings"
              changeState={this.changeState}
              iconName="icon-star-filled"
              selected={this.state.active}
            />
            <MenuItem
              name="Settings"
              changeState={this.changeState}
              iconName="icon-cog"
              selected={this.state.active}
            />
          </div>
          <div className="log-out-btn" onClick={() => this.logOut()}>
            <h1>
              <i className="icon-logout" /> Log Out
            </h1>
          </div>
        </div>
        <Panel active={this.state.active} />
      </div>
    );
  }

  changeState(state) {
    this.setState({ active: state });
  }

  logOut() {
    console.log("log out");
    graphRequest("logout").then(res => {
      this.props.update();
    });
  }
}

export default Container;
