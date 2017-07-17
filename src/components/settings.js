import React, { Component } from 'react';
import { FormControl, Form, ControlLabel, FormGroup, Col, Button} from 'react-bootstrap';
class Settings extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="title"><h1>Settings Menu</h1></div>
        <div className="settings-panel">
          <tr>
            <td><b>App Name: </b></td>
            <td><FormControl type="email" placeholder="Taxi Native" className="input-search-box" /></td>
          </tr>
          <tr>
            <td><b>Google Maps API Key: </b></td>
            <td>                <FormControl type="email" placeholder="API key" className="input-search-box" /></td>
          </tr>
          <tr>
            <td><Button className="botonsito">Save Changes</Button></td>
          </tr>
        </div>
      </div>
    );
  }
}

export default Settings;