import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex-center centered lds-css ng-scope">
        <div className="lds-rolling">
          <div />
        </div>
      </div>
    );
  }
}

export default Loading;
