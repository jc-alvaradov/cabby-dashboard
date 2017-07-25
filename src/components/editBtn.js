import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ModalWindow from './modalWindow';

class EditBtn extends Component {
  constructor(props){
    super(props);
    this.state = {"show": false};
    this.close = this.close.bind(this);
  }
  render(){
    // muestra un modal
    // editar un cliente, conductor, ride, etc. cada uno tiene valores distintos.
    // esos valores llenan cambpos cons los datos que se reciben como props.
    // cuando se quiere guardar los cambios se envia una peticion con axios.

    return(
      <div>
        <Button onClick={() => this.setState({show: !this.state.show})}>Edit</Button>
        <ModalWindow show={this.state.show} close={this.close} content={<div></div>} />
      </div>
    );
  }
  
  close(){
    this.setState({show: false});
  }
}

export default EditBtn;