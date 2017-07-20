import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.useXDomain = true;

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
    // hacer peticion con axios para hacer login
    if(this.state.username && this.state.passwd){
      console.log("voy a autenticar");
      axios.post('http://localhost:3000/login', {
        username: this.state.username,
        password: this.state.passwd
      }).then(res => {
        if(res.data == "LOGIN-SUCCESS"){

        }else{

        }

        console.log("llegooo cartaaaa <3");
        console.log(res.data);
        //this.setState({ rides: res.data.data.getAllRides });
      }).catch(err => {
        console.log("hubo un error " + err);
      });
    }else{
      console.log("Please fill all fields.");
    }
  }
}

export default LoginForm;