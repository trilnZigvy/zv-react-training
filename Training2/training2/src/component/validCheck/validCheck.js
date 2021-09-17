import React, { Component } from "react";
import CountDown from "../countDown/countDown";
class validCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOk: true,
      str: this.props.data,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.str) {
      return { str: props.data };
    }
    return null;
  }

  render() {
    const isValidInput = isNaN(Number(this.props.data)) ? true : false;

    const isValidNumber = Number.isInteger(Number(this.props.data));

    let str = Number(this.props.data);
    console.log(str);
    // let isOk = false;
    if (!isValidInput) {
      if (isValidNumber) {
        if (Number(this.props.data) <= 0) {
          str = "Number must be greater than 0";
        }
      } else {
        str = "Number must be an Interger";
      }
    } else {
      str = "Invalid input. Must be a number";
    }

    return (
      <div>
        {isNaN(str) ? str : <CountDown key="alolo" data={str} />}
        {/* <CountDown data={this.props.data} /> */}
      </div>
    );
  }
}

export default validCheck;
