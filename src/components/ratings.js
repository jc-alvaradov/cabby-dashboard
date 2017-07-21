import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './resultsTable';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';

class Ratings extends Component {
  constructor(props){
    super(props);
    this.state = {"results": []};
    this.reloadComponent = this.reloadComponent.bind(this);
  }

  componentDidMount() {
    reloadComponent();
  }

  reloadComponent() {
    // pedimos todos los ratings y los mostramos
    const results = graphRequest("graphql", { 
      "query": "query { getRatings{ driverName clientName rating amount  } }"
    });

    results.map((result) => {
      result.push({"Delete": <DeleteBtn id={result._id} type="rating" reload={this.reloadComponent}/>});
    });

    this.setState({results});
  }

  render() {
    return(
      <div>
        <div className="title"><h1>Ratings Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown listCallBack={this.listCallBack} id="ratings-dropdown" items={["Most Recent", "Highests", "Lowests", "All Ratings"]}/>
            <SearchBox searchCallBack={this.searchCallBack}id="client-search-box" placeHolder="Search ratings by client or driver name" />
          </div>
          <ResultsTable headers={["Rating", "From", "To", "Message", "Date", "Delete"]} objects={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default Ratings;