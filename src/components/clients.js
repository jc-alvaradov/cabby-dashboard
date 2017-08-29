import React, { Component } from "react";
import SearchBox from "./searchBox";
import ListDropdown from "./listDropdown";
import ResultsTable from "./results/client";
import DeleteBtn from "./deleteBtn";
import { graphRequest } from "./graphRequest";
import { makeQuery } from "./makeQuery";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: null
    };
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        query: makeQuery(
          "query",
          "getClients",
          ["id", "clientName", "phone", "rating", "active", "payment"],
          { state: "active" },
          ["$state: String!"]
        )
      },
      () => this.reloadComponent()
    );
  }

  reloadComponent() {
    graphRequest("graphql", this.state.query).then(res => {
      if (res !== undefined) {
        const func = Object.keys(res.data.data);
        res = res.data.data[func];
        this.setState({ results: res });
        this.setState({ loading: false });
      }
    });
  }

  listCallBack(selected) {
    switch (selected) {
      case "Active Clients":
        selected = "active";
        break;
      case "Inactive Clients":
        selected = "inactive";
        break;
      case "All Clients":
        selected = "all";
        break;
    }
    this.setState(
      {
        query: makeQuery(
          "query",
          "getClients",
          ["id", "clientName", "phone", "rating", "active", "payment"],
          { state: selected },
          ["$state: String!"]
        )
      },
      () => this.reloadComponent()
    );
  }

  searchCallBack(clientName) {
    this.setState(
      {
        query: makeQuery(
          "query",
          "getClient",
          ["id", "clientName", "phone", "rating", "active", "payment"],
          { clientName: clientName },
          ["$clientName: String!"]
        )
      },
      this.reloadComponent
    );
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>Clients Menu</h1>
        </div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown
              listCallBack={this.listCallBack}
              id="clients-dropdown"
              items={["Active Clients", "Inactive Clients", "All Clients"]}
            />
            <SearchBox
              searchCallBack={this.searchCallBack}
              id="clients-search-box"
              placeHolder="Search clients by name or id"
            />
          </div>
          <ResultsTable
            reload={this.reloadComponent}
            objects={this.state.results}
          />
        </div>
      </div>
    );
  }
}

export default Clients;
