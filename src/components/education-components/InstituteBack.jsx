import React, { Component } from "react";

class InstituteBack extends Component {
  render() {
    return (
      <div>
        <h2>Passed in {this.props.passingYear}</h2>
        <h3>with</h3>
        <h1>{this.props.marks}% Score</h1>
      </div>
    );
  }
}

export default InstituteBack;
