import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './resultsTable';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';
import { makeQuery } from './makeQuery';

class Rides extends Component {
  constructor(props){
    super(props);
    this.state = {
      "results": [],
      "query": {"query": "query { getRides{ id driverName clientName amount startLocation{ lat lng } destination{ lat lng } rideState cancelReason rating } }"}
    };
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  componentDidMount() {
    this.setState({query: makeQuery("query", "getRides", ["id", "amount", "driverName", "clientName", "startLocation{ lat lng }", "destination{ lat lng }", "rideState"], {"state": "active"}, ["$state: String!"])}, () => this.reloadComponent());
  }

  reloadComponent() {
    graphRequest("graphql", this.state.query).then(res => {
      // parse response
      const func = Object.keys(res.data.data);
      res = res.data.data[func];
      this.setState({ results: res });
      this.setState({ loading: false });
    });
  }

  listCallBack(query) {
    switch(query) {
      case "Active Rides":
        query = "active";
        break;
      case "Finished Rides":
        query = "finished";
        break;
      case "Canceled Rides":
        query = "canceled";
        break;
      case "All Rides":
        query = "all";
        break;
    }
    this.setState({query: makeQuery("query", "getRides", ["id", "amount", "driverName", "clientName", "startLocation{ lat lng }", "destination{ lat lng }", "rideState"], {"state": query}, ["$state: String!"])}, this.reloadComponent);
  }

  searchCallBack(query){    
    this.setState({query: makeQuery("query", "getRide", ["id", "amount", "driverName", "clientName", "startLocation{ lat lng }", "destination{ lat lng }", "rideState"], {"name": query}, ["$name: String!"])}, this.reloadComponent);
}

  render() {
    return(
      <div>
        <div className="title"><h1>Rides Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown listCallBack={this.listCallBack} id="ratings-dropdown" items={["Active Rides", "Finished Rides", "Canceled Rides", "All Rides"]} />
            <SearchBox searchCallBack={this.searchCallBack} id="client-search-box" placeHolder="Search rides by client or driver name" />
          </div>
          <ResultsTable reload={this.reloadComponent} type="rides" headers={["Amount", "Driver", "Client", "State", "Ride Map", "Edit", "Delete"]} objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Rides;