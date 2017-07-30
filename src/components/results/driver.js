import React, { Component } from 'react';
import { Table, Image } from 'react-bootstrap';
import EditBtn from '../editBtn';
import DeleteBtn from '../deleteBtn';
import LocationBtn from '../locationBtn';

class ResultsTable extends Component {
  constructor(props){
    super(props);
  }

  render(){ 
    const headers = ["Photo", "Name", "Phone Number", "Rating", "Car model", "Patent", "Earnings", "State", "Current Location", "Edit", "Delete"].map((header) => <th>{header}</th>);
    const results = this.props.objects.map((res) => {
      let items = Object.values(res);       // obtenemos los valores del objeto     
      let img;
      items.shift();                        // eliminamos el id de los resultados
      items.pop();
      img = items.shift();
      items = items.map(item => (typeof item !== 'object') ? <td>{item}</td> : null);
      items = items.filter(item => item !== null);
      items.unshift(<td><Image src={img} width="40" height="40" circle /></td>);
      items.push(<td><LocationBtn lat={res.location.lat} lng={res.location.lng}/></td>);
      items.push(<td><EditBtn data={res} type="drivers" reload={this.props.reload}/></td>);
      items.push(<td><DeleteBtn id={res.id} type="drivers" reload={this.props.reload}/></td>);
      return <tr>{items}</tr>
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
            {results}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ResultsTable;