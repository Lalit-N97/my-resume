import React, { Component } from "react";

class InstituteFront extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.schoolName}</h1>
        <h2>
          {`${this.props.standard}${
            typeof this.props.standard === typeof 5
              ? "th Standard"
              : " Computer Science Engineering"
          }`}{" "}
        </h2>
      </div>
    );
  }
}

export default InstituteFront;
