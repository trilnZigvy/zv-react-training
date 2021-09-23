import React, { Component } from "react";

class Invalid extends Component {
  componentDidUpdate() {
    alert("user not found")
    this.props.history.push("/app/user");
  }
  render() {
    return <div>{console.log("user not found")}</div>;
  }
}

export default Invalid;
