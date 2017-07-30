import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './results/driver';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';
import { makeQuery } from './makeQuery';

class Drivers extends Component {
  constructor(props){
    super(props);
    this.state = {
      "results": [],
      "query": null
    };
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  componentDidMount() {
    this.setState({
      query: makeQuery("query", "getDrivers", 
      ["id", "photo", "driverName", "phone", "rating", "carModel", "carPlate", "earnings", "active", "location{ lat lng }", "payment"],
      {"state": "active"}, ["$state: String!"])
    }, () => this.reloadComponent());
  }

  reloadComponent() {
    graphRequest("graphql", this.state.query).then(res => {
      if(res !== undefined) {
        const func = Object.keys(res.data.data);
        res = res.data.data[func];
        this.setState({ results: res });
        this.setState({ loading: false });
      }
    });
  }

  listCallBack(query) {
    switch(query) {
      case "Active Drivers":
        query = "active";
        break;
      case "Inactive Drivers":
        query = "inactive";
        break;
      case "All Drivers":
        query = "all";
        break;
    }
    this.setState({
      query: makeQuery("query", "getDrivers", 
      ["id", "photo", "driverName", "phone", "rating", "carModel", "carPlate", "earnings", "active", "location{ lat lng }", "payment"],
      {"state": query}, ["$state: String!"])
    }, () => this.reloadComponent());
  }

  searchCallBack(searchTerm) {
    // user can search a driver by name or car patent  
    this.setState({
      query: makeQuery("query", "getDriver",
      ["id", "photo", "driverName", "phone", "rating", "carModel", "carPlate", "earnings", "active", "location{ lat lng }", "payment"], 
      {"driverName": searchTerm}, ["$driverName: String!"])
    }, this.reloadComponent);
  }

  render() {
    return(
      <div>
        <div className="title">
          <h1>Drivers Menu</h1>
        </div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown 
              listCallBack={this.listCallBack} 
              id="drivers-dropdown" 
              items={["Active Drivers", "Inactive Drivers", "All Drivers"]}/>
            <SearchBox 
              searchCallBack={this.searchCallBack} 
              id="driver-search-box" 
              placeHolder="Search driver by name, id or car patent" />
          </div>
          <ResultsTable 
            reload={this.reloadComponent}
            objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Drivers;