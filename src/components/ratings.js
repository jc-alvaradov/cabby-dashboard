import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './results/rating';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';
import { makeQuery } from './makeQuery';

class Ratings extends Component {
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
      makeQuery("query", "getRatings", 
      ["id", "rating", "from", "to", "message", "date"],
      {"filter": "most recent"}, ["$filter: String!"])
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

  listCallBack(selected) {
    switch(selected) {
      case "Most Recent":
        selected = "most recent";
        break;
      case "Highests":
        selected = "highest";
        break;
      case "Lowests":
        selected = "lowest";
        break;
      case "All Ratings":
        selected = "all";
        break;
    }
    this.setState({query: 
      makeQuery("query", "getRatings", 
      ["id", "rating", "from", "to", "message", "date"],
      {"filter": selected}, ["$filter: String!"])
    }, () => this.reloadComponent());
  }
  searchCallBack(searchName) {
    // user can search ratings by client or driver name    
    this.setState({
      query: makeQuery("query", "getRating", 
      ["id", "rating", "from", "to", "message", "date"],
      {"name": searchName}, ["$name: String!"])
    }, this.reloadComponent);
}

  render() {
    return(
      <div>
        <div className="title">
          <h1>Ratings Menu</h1>
        </div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown 
              listCallBack={this.listCallBack} 
              id="ratings-dropdown" 
              items={["Most Recent", "Highests", "Lowests", "All Ratings"]} />
            <SearchBox 
              searchCallBack={this.searchCallBack} 
              id="ratings-search-box" 
              placeHolder="Search ratings by driver or client name" />
          </div>
          <ResultsTable 
            reload={this.reloadComponent} 
            objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Ratings; 