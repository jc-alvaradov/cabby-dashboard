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
      "query": {"query": "query { getRides{ rideId driverName clientName amount startLocation{ lat lng } destination{ lat lng } rideState cancelReason rating } }"}
    };
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  componentDidMount() {
    this.setState({query: makeQuery("query", "getRides", ["rideId", "driverName", "clientName", "amount", "startLocation{ lat lng }", "destination{ lat lng }", "rideState", "cancelReason", "rating"], {"state": "active"}, ["$state: String!"])});
    this.reloadComponent();
  }

  reloadComponent() {
   graphRequest("graphql", this.state.query).then(res => {
      this.setState({ results: res });
      this.setState({ loading: false });
    });
  }

  listCallBack(query){
    //this.setState({query}).then(this.reloadComponent);
  }

  searchCallBack(query){
    //this.setState({query}).then(this.reloadComponent);
  }

  render() {
    return(
      <div>
        <div className="title"><h1>Ratings Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown listCallBack={this.listCallBack} id="ratings-dropdown" items={["Most Recent", "Highests", "Lowests", "All Ratings"]}/>
            <SearchBox searchCallBack={this.searchCallBack} id="client-search-box" placeHolder="Search ratings by client or driver name" />
          </div>
          <ResultsTable headers={["Rating", "From", "To", "Message", "Date", "Delete"]} objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Rides;