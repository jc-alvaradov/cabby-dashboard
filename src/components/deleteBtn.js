import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { graphRequest } from './graphRequest';

class DeleteBtn extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
      <Button bsStyle="danger" onClick={this.handleClick()}>
        <i className="icon-trash-empty"/>Delete
      </Button>
    );
  }

  handleClick(){
    // borrar el elemento de la base de datos que tenga el id que me pasaron.
    // se identifica que tipo de elemento es usando el prop llamado "type"
    // si se elimino correctamente se llama a un callback para q recargue.
    const result = graphRequest("graphql", { 
    });
    
    this.props.reload();
  }
}

export default DeleteBtn;