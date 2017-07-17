import React, { Component } from 'react';
import { Button, ButtonToolbar, DropdownButton, MenuItem, FormControl, Table, Image } from 'react-bootstrap';

class Drivers extends Component{
  constructor(props){
    super(props);
    this.state = {
      "sItem": "Active drivers"
    };
  }

  render(){
    // pedimos los conductores usando ajax
    // let drivers = []; 
    /*
    if(drivers.length > 0){
      content = drivers.map();
    }else{
      content = "No drivers found...";
    }
    
    */

    return(
      <div>
        <div className="title"><h1>Drivers Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <div>
              <b>List: </b>
              <DropdownButton bsStyle="default" title={this.state.sItem} id="show-dropdown">
                <MenuItem eventKey="active-drivers" onClick={() => this.setState({sItem: "Active drivers"})} className={(this.state.sItem === "Active drivers") ? "active" : ""}>Active Drivers</MenuItem>
                <MenuItem eventKey="inactive-drivers" onClick={() => this.setState({sItem: "Inactive drivers"})} className={(this.state.sItem === "Inactive drivers") ? "active" : ""}>Inactive Drivers</MenuItem>
                <MenuItem eventKey="all-drivers" onClick={() => this.setState({sItem: "All drivers"})} className={(this.state.sItem === "All drivers") ? "active" : ""}>All Drivers</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <FormControl id="driver-search-box" type="text" label="Text" placeholder="Search driver by name, id or car patent" className="input-search-box"/>
              <Button className="botonsito">Search</Button>
            </div>
          </div>
          <div className="search-results">
            <Table striped bordered condensed hover className="results-table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Car model</th>
                  <th>Patent</th>
                  <th>Earnings</th>
                  <th>Current Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Image src="http://via.placeholder.com/50x50" circle /></td>
                  <td>Juan Carlos Alvarado</td>
                  <td>+56941349392</td>
                  <td><i className="icon-star" /> 4.5</td>
                  <td>Hyundai Accent</td>
                  <td>CLLK32</td>
                  <td>$394.345</td>
                  <td><Button bsStyle="default">Show on map</Button></td>
                  <td><Button bsStyle="default">Edit</Button></td>
                  <td>
                    <Button bsStyle="danger">
                      <i className="icon-trash-empty"/>Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td><Image src="http://via.placeholder.com/50x50" circle /></td>
                  <td>Roberto Gonzales</td>
                  <td>+56941349392</td>
                  <td><i className="icon-star" /> 3.8</td>
                  <td>Chevrolet Corsa</td>
                  <td>CKSK32</td>
                  <td>$0</td>
                  <td><Button bsStyle="default">Show on map</Button></td>
                  <td><Button bsStyle="default">Edit</Button></td>
                  <td>
                    <Button bsStyle="danger">
                      <i className="icon-trash-empty"/>Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Drivers;