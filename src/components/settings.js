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
          <table>
            <tbody>
              <tr>
                <td><b>App Name: </b></td>
                <td><FormControl type="email" placeholder="Taxi Native" className="input-search-box" /></td>
              </tr>
              <tr>
                <td><b>App Photo: </b></td>
                <td><FormControl type="email" placeholder="Photo Link" className="input-search-box" /></td>
              </tr>
              <tr>
                <td><b>Google Maps API Key: </b></td>
                <td><FormControl type="email" placeholder="API key" className="input-search-box" /></td>
              </tr>
            </tbody>
          </table>
          <div className="center-div">
            <Button className="main-btn settings-btn">Save Changes</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;