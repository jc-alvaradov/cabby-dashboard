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
        <Menu active={this.state.active}/>
        <Panel active={this.state.active}/>
      </div>
    );
  }
}

export default Container;