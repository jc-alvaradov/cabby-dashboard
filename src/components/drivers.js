import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './resultsTable';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';

class Drivers extends Component {
  constructor(props){
    super(props);
    this.state = {"results": []};
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  render() {
    return(
      <div>
        <div className="title"><h1>Drivers Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown listCallBack={this.listCallBack} id="drivers-dropdown" items={["Active Drivers", "Inactive Drivers", "All Drivers"]}/>
            <SearchBox searchCallBack={this.searchCallBack} id="driver-search-box" placeHolder="Search driver by name, id or car patent" />
          </div>
          <ResultsTable headers={["Photo", "Name", "Phone Number", "Rating", "Car model", "Patent", "Earnings", "Current Location", "Edit", "Delete"]} objects={this.state.results}/>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    reloadComponent();
  }

  reloadComponent() {
    // pedimos todos los ratings y los mostramos
    graphRequest("graphql", { 
      "query": "query { getDrivers{ driverName rating } }"
    }).then(results => {
      results.map(result => {
        result.push({"Delete": <DeleteBtn id={result._id} type="driver" reload={this.reloadComponent}/>});
      });
      this.setState({results});
    });
  }

  listCallBack() {
    // buscar filtrando por el metodo que se envia, cambiar el estado
  }

  searchCallBack(search) {
    // buscar por el termino que se envia, cambiar el estado
  }
}

export default Drivers;

/*

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
               

*/