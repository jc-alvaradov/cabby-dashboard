import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './resultsTable';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';
import { makeQuery } from './makeQuery';

class Clients extends Component {
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
    this.setState({query: 
      makeQuery("query", "getClients", 
      ["id", "clientName", "phone", "email", "rating", "active"],
      {"active": "true"}, ["$state: String!"])
    }, () => this.reloadComponent());
  }

  reloadComponent() {
    graphRequest("graphql", this.state.query).then(res => {
      const func = Object.keys(res.data.data);
      res = res.data.data[func];
      this.setState({ results: res });
      this.setState({ loading: false });
    });
  }

  listCallBack(selected) {
    switch(selected) {
      case "Active Clients":
        selected = "true";
        break;
      case "Inactive Clients":
        selected = "false";
        break;
      case "All Clients":
        selected = "all";
        break;
    }
    this.setState({query: 
      makeQuery("query", "getClients", 
      ["id", "clientName", "phone", "email", "rating", "active"],
      {"active": selected}, ["$active: String!"])
    }, () => this.reloadComponent());
  }

  searchCallBack(clientName) {    
    this.setState({
      query: makeQuery("query", "getClient", 
      ["id", "clientName", "phone", "email", "rating", "active"], 
      {"name": clientName}, ["$name: String!"])
    }, this.reloadComponent);
}

  render() {
    return(
      <div>
        <div className="title">
          <h1>Rides Menu</h1>
        </div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown 
              listCallBack={this.listCallBack} 
              id="clients-dropdown" 
              items={["Active Clients", "Inactive Clients", "All Clients"]} />
            <SearchBox 
              searchCallBack={this.searchCallBack} 
              id="clients-search-box" 
              placeHolder="Search clients by name or id" />
          </div>
          <ResultsTable 
            reload={this.reloadComponent} 
            type="clients" 
            headers={["Name", "Phone Number", "Email", "Rating", "State", "Edit", "Delete"]} 
            objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Clients; 