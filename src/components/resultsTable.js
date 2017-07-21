import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class ResultsTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const headers = this.props.headers.map((header) => <th>{header}</th>);
    const items = this.props.objects.map((object) => {
      return <tr>{Object.values(object).map((key) => <td>{key}</td>)}</tr>;
    });

    return(
      <div className="search-results">
        <Table striped bordered condensed hover className="results-table">
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ResultsTable;