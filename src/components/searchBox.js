import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {"searchBox": ""};
  }
  render(){
    return(
      <div>
        <FormControl id={ this.props.id } onChange={(e) => this.setState({searchBox: e.target.value})} type="text" label="Text" placeholder={ this.props.placeHolder } className="input-search-box"/>
        <Button className="main-btn" onClick={ this.props.searchCallBack(this.state.searchBox) }>Search</Button>
      </div>
    );
  }
}

export default SearchBox;