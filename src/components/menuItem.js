import React, { Component } from 'react';

class MenuItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let itemStyle;
    if(this.props.selected == this.props.name){
      itemStyle = {
        backgroundColor: '#181b1f'
      };
    }
    return(
      <div className="menu-item" onClick={() => this.props.changeState(this.props.name)} style={itemStyle}><i className={this.props.iconName}/>   {this.props.name}</div>
    );
  }
}

export default MenuItem;