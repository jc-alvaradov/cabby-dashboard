import React, { Component } from 'react';
import { Button, ButtonToolbar, DropdownButton, MenuItem, FormControl, Table, Image } from 'react-bootstrap';

class Ratings extends Component{
  constructor(props){
    super(props);
    this.state = {
      "sItem": "Most Recent"
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
        <div className="title"><h1>Ratings Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <div>
              <b>List: </b>
              <DropdownButton bsStyle="default" title={this.state.sItem} id="show-dropdown">
                <MenuItem eventKey="most-recent" onClick={() => this.setState({sItem: "Most Recent"})} className={(this.state.sItem === "Most Recent") ? "active" : ""}>Most Recent</MenuItem>
                <MenuItem eventKey="highests" onClick={() => this.setState({sItem: "Highests"})} className={(this.state.sItem === "Highests") ? "active" : ""}>Highests</MenuItem>
                <MenuItem eventKey="lowests" onClick={() => this.setState({sItem: "Lowests"})} className={(this.state.sItem === "Lowests") ? "active" : ""}>Lowests</MenuItem>
                <MenuItem eventKey="all-ratings" onClick={() => this.setState({sItem: "All Ratings"})} className={(this.state.sItem === "All Ratings") ? "active" : ""}>All Ratings</MenuItem>
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
                  <th>Rating</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4.3</td>
                  <td>Roberto Gonzales (Driver)</td>
                  <td>Juan Alvarado (Client)</td>
                  <td>sadasdasdkskdskdlsdkldksdsdsdsdsdsdsd</td>
                  <td>24/07/2017</td>
                  <td>
                    <Button bsStyle="danger">
                      <i className="icon-trash-empty"/>Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4.3</td>
                  <td>Francisca Cruz (Client)</td>
                  <td>Juan Alvarado (Driver)</td>
                  <td>sadasdasdkskdskdlsdkldksdsdsdsdsdsdsd</td>
                  <td>24/07/2017</td>
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

export default Ratings;