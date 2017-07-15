import React, { Component } from 'react';
import Menu from './menu';
import Panel from './panel';

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {"active": "rides"};
  }

  render(){
    return(
      <div className="container">
        <Menu className="menu" active={this.state.active}/>
        <Panel className="panel" active={this.state.active}/>
      </div>
    );
  }
}

export default Container;