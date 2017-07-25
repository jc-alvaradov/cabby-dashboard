import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ModalWindow from './modalWindow';
import { graphRequest } from './graphRequest';
import { makeQuery } from './makeQuery';

class DeleteBtn extends Component{
  constructor(props){
    super(props);
    this.state = {"show": false};
    this.close = this.close.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render(){
    return(
      <div>
        <Button bsStyle="danger" onClick={() => this.setState({show: !this.state.show})}>
          <i className="icon-trash-empty"/>Delete
        </Button>
        <ModalWindow title="Delete" size={"small"} show={this.state.show} close={this.close} 
          content={
            <div>
              <p>Are you sure you want to delete this item?</p><br/>
              <div style={{textAlign: "center"}}>
                <Button onClick={() => this.close()} style={{marginRight: "2px"}}>Cancel</Button>
                <Button onClick={() => this.deleteItem()} bsStyle="danger">Delete Forever</Button>
              </div>
            </div>
          } 
        />
      </div>
    );
  }

  deleteItem(){
    // borrar el elemento de la base de datos que tenga el id que me pasaron.
    // se identifica que tipo de elemento es usando el prop llamado "type"
    // si se elimino correctamente se llama a un callback para q recargue.
    //this.props.type;
    //this.props.id;
    let deleteType;
    switch(this.props.type) {
      case "rides":
        deleteType = "deleteRide";
        break;
      case "drivers":
        deleteType = "deleteDrivers";
        break;
      case "clients":
        deleteType = "deleteClients";
        break;
      case "ratings":
        deleteType = "deleteRatings";
        break;
      default: 
        return;
    }

    let query = makeQuery("mutation", deleteType, null, {"id": this.props.id}, ["$id: String!"]);
    graphRequest("graphql", query).then(() => {
      this.props.reload();
      this.close();
    });
  }
  
  close(){
    this.setState({show: false});
  }
}

export default DeleteBtn;