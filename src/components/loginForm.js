import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { graphRequest } from './graphRequest';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: null,
      passwd: null
    };
    this.loginUser = this.loginUser.bind(this);
  }

  render(){
    return (
      <div className="flex-center">
        <div className="login-panel">
          <div>
            <h4><b>Username</b></h4>
            <FormControl style={{width: 200}} type="text" className="input-search-box" onChange={(e) => this.setState({username: e.target.value})} /><br />
            <h4><b>Password</b></h4>
            <FormControl style={{width: 200}} type="password" className="input-search-box" onChange={(e) => this.setState({passwd: e.target.value})} />
          </div>
          <div className="center-div">
            <Button className="main-btn primary-btn" style={{width: 200}} onClick={() => this.loginUser()}>Login</Button>
          </div>
        </div>
      </div>
    );
  }
  
  loginUser(){
    if(this.state.username && this.state.passwd){
      graphRequest("login", {
        username: this.state.username,
        password: this.state.passwd
      }).then(res => {
        if(res.data == "LOGIN-SUCCESS"){
          this.props.update();
        }else{
          alert("Login error, try again");
        }
      });
    }else{
      alert("Please fill all fields.");
    }
  }
}

export default LoginForm;