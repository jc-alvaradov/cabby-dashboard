import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import LocationBtn from './locationBtn';

class ResultsTable extends Component {
  constructor(props){
    super(props);
  }
  render(){ 
    const headers = this.props.headers.map((header) => <th>{header}</th>);
    // armar la lista de resultados
    // this.props.objects = array con un objeto adentro.
    // quiero imprimir los valores de this.props.objects.
    // si uno de los objetos es una ubicacion quiero pasar el valor a un boton
    // NO FUNCTION CON .MAP cItems.map(item => item + " jajajaa");
    // ES UN ARREGLO

    const results = this.props.objects.map((res) => {
      let items = Object.values(res);
      let cItems = [];

      for(let i=1; i < items.length; i++){
        if(items[i] !== null){
          cItems.push(items[i]);
        }
      }

      items = cItems;

      for(let i=0; i < items.length; i++) {
        if(typeof items[i] !== 'object' && items[i] !== null){
          items[i] = <td>{items[i]}</td>;
        }else{
          items[i] = <td><LocationBtn lat={items[i].lat} lng={items[i].lng} /></td>;
        }
      }
      // hacer push del boton de editar y del de eliminar
      items.push(<td><EditBtn data={res} /></td>);
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