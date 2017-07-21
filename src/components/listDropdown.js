import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ListDropdown extends Component {
  constructor(props){
    super(props);
    this.state = {"selected": this.props.items[0]};
    this.updateView = this.updateView.bind(this);
  }
  render(){
    const items = this.props.items.map((item) => 
      <MenuItem eventKey={item} onClick={() => this.updateView(item)} className={(this.state.selected === item) ? "active" : ""}>{item}</MenuItem>
    );

    return(
      <div>
        <b>List: </b>
        <DropdownButton bsStyle="default" title={this.state.selected} id={this.props.id}>
          {items}
        </DropdownButton>
      </div>
    );
  }
  updateView(title){
    this.setState({selected: title});
    // hacer toda la logica de armar el query y hacer la peticion en el callback
    // ahora solo enviare el nombre del filtro que quiero aplicar
    this.props.listCallBack(title);
  }
}

export default ListDropdown;