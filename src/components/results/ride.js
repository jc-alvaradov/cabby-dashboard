import React, { Component } from "react";
import { Table } from "react-bootstrap";
import EditBtn from "../editBtn";
import DeleteBtn from "../deleteBtn";
import RideMap from "../rideMap";

class ResultsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headers = [
      "Amount",
      "Driver",
      "Client",
      "State",
      "Ride Map",
      "Edit",
      "Delete"
    ].map(header =>
      <th>
        {header}
      </th>
    );
    const results = this.props.objects.map(res => {
      let items = Object.values(res); // obtenemos los valores del objeto
      items.shift(); // eliminamos el id de los resultados
      items = items.map(
        item =>
          typeof item !== "object"
            ? <td>
                {item}
              </td>
            : null
      );
      items = items.filter(item => item !== null);
      items.push(
        <td>
          <RideMap start={res.startLocation} dest={res.destination} />
        </td>
      );
      items.push(
        <td>
          <EditBtn data={res} type="rides" reload={this.props.reload} />
        </td>
      );
      items.push(
        <td>
          <DeleteBtn id={res.id} type="rides" reload={this.props.reload} />
        </td>
      );
      return (
        <tr key={res.id}>
          {items}
        </tr>
      );
    });

    return (
      <div className="search-results">
        <Table striped bordered condensed hover className="results-table">
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {results}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ResultsTable;
