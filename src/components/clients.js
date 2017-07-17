import React, { Component } from 'react';
import { Button, ButtonToolbar, DropdownButton, MenuItem, FormControl, Table, Image } from 'react-bootstrap';

class Clients extends Component{
  constructor(props){
    super(props);
    this.state = {
      "sItem": "Active clients"
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
        <div className="title"><h1>Clients Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <div>
              <b>List: </b>
              <DropdownButton bsStyle="default" title={this.state.sItem} id="show-dropdown">
                <MenuItem eventKey="active-clients" onClick={() => this.setState({sItem: "Active clients"})} className={(this.state.sItem === "Active clients") ? "active" : ""}>Active Clients</MenuItem>
                <MenuItem eventKey="inactive-clients" onClick={() => this.setState({sItem: "Inactive clients"})} className={(this.state.sItem === "Inactive clients") ? "active" : ""}>Inactive Clients</MenuItem>
                <MenuItem eventKey="all-clients" onClick={() => this.setState({sItem: "All clients"})} className={(this.state.sItem === "All clients") ? "active" : ""}>All Clients</MenuItem>
              </DropdownButton>
            </div>
            <div>
              <FormControl id="client-search-box" type="text" label="Text" placeholder="Search client by name or id" className="input-search-box"/>
              <Button className="botonsito">Search</Button>
            </div>
          </div>
          <div className="search-results">
            <Table striped bordered condensed hover className="results-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Current Location</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Alvarado</td>
                  <td>Table cell</td>
                  <td><i className="icon-star" /> 5</td>
                  <td><Button bsStyle="default">Show on map</Button></td>
                  <td><Button bsStyle="default">Edit</Button></td>
                  <td>
                    <Button bsStyle="danger">
                      <i className="icon-trash-empty"/>Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Juan Alvarado</td>
                  <td>Table cell</td>
                  <td><i className="icon-star" /> 4.3</td>
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

export default Clients;