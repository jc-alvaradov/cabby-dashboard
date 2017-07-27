import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import RideMap from './rideMap';

class ResultsTable extends Component {
  constructor(props){
    super(props);
  }

  render(){ 
    const headers = this.props.headers.map((header) => <th>{header}</th>);
    const results = this.props.objects.map((res) => {
      const start = res.startLocation;
      const dest = res.destination;
      let items = Object.values(res);       // obtenemos los valores del objeto     
      items.shift();                        // eliminamos el id de los resultados
      items = items.map(item => (typeof item !== 'object') ? <td>{item}</td> : null);
      // buscamos los null y los eliminamos
      items = items.filter(item => item !== null);
      // hacemos push del boton de mapa, editar y del de eliminar
      items.push(<td><RideMap start={start} dest={dest}/></td>);
      items.push(<td><EditBtn data={res} type={this.props.type} reload={this.props.reload}/></td>);
      items.push(<td><DeleteBtn id={res.id} type={this.props.type} reload={this.props.reload}/></td>);
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