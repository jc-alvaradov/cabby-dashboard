import React, { Component } from 'react';
import SearchBox from './searchBox';
import ListDropdown from './listDropdown';
import ResultsTable from './resultsTable';
import DeleteBtn from './deleteBtn';
import { graphRequest } from './graphRequest';

class Clients extends Component{
  constructor(props){
    super(props);
    this.state = {"results": []};
    this.reloadComponent = this.reloadComponent.bind(this);
    this.listCallBack = this.listCallBack.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  render(){
    return(
      <div>
        <div className="title"><h1>Clients Menu</h1></div>
        <div className="search-box">
          <div className="search-options">
            <ListDropdown listCallBack={this.listCallBack} id="clients-dropdown" items={["Active Clients", "Inactive Clients", "All Clients"]}/>
            <SearchBox searchCallBack={this.searchCallBack} id="clients-search-box" placeHolder="Search client by name or id" />
          </div>
          <ResultsTable headers={["Name", "Phone Number", "Rating", "Current Location", "Edit", "Delete"]} objects={this.state.results}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    reloadComponent();
  }

  reloadComponent() {
    // pedimos todos los clientes y los mostramos
    graphRequest("graphql", { 
      "query": "query { getClients{ clientName active rating } }"
    }).then(results => {
      results.map(result => {
        // convertir location en un boton
        // hacer edit
        result.push({"Delete": <DeleteBtn id={result._id} type="client" reload={this.reloadComponent}/>});
      });
      this.setState({results});
    });
  }

  listCallBack() {
    // buscar filtrando por el metodo que se envia, cambiar el estado
  }

  searchCallBack(search) {
    // buscar por el termino que se envia, cambiar el estado
  }
}

export default Clients;

/*
 <tr>
                  <td>Juan Alvarado</td>
                  <td>Table cell</td>
                  <td><i className="icon-star" /> 5</td>
                  <td><Button bsStyle="default">Show on map</Button></td>
                  <td><Button bsStyle="default">Edit</Button></td>
                  <td>
                    <Button bsStyle="danger">
                      <i className="icon-trash-empty"/>Delete
                    </Button>
                  </td>
                </tr>

*/