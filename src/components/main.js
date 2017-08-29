import React, { Component } from "react";
import Container from "./container";
import LoginForm from "./loginForm";
import Loading from "./loading";
import { graphRequest } from "./graphGetRequest";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { render: <Loading /> };
    this.updateRender = this.updateRender.bind(this);
  }

  render() {
    return this.state.render;
  }

  componentDidMount() {
    this.updateRender();
  }

  updateRender() {
    graphRequest("login").then(res => {
      if (res.data == "LOGIN-SUCCESS") {
        this.setState({ render: <Container update={this.updateRender} /> });
      } else {
        this.setState({ render: <LoginForm update={this.updateRender} /> });
      }
    });
  }
}

export default Main;
