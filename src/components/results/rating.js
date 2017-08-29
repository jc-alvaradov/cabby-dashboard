import React, { Component } from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import EditBtn from "../editBtn";
import DeleteBtn from "../deleteBtn";

class ResultsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headers = [
      "Rating",
      "From",
      "To",
      "Message",
      "Date",
      "Delete"
    ].map(header =>
      <th>
        {header}
      </th>
    );
    const results = this.props.objects.map(res => {
      let items = Object.values(res); // obtenemos los valores del objeto
      const date = new Date(items.pop());
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
          {moment(date).format("DD/MM/YYYY")}
        </td>
      );
      items.push(
        <td>
          <DeleteBtn id={res.id} type="ratings" reload={this.props.reload} />
        </td>
      );
      return (
        <tr>
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
