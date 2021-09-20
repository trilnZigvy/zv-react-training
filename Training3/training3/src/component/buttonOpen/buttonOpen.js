import React, { Component } from "react";
import Keylogger from "./../keylogger/keylogger";

class buttonOpen extends Component {
  constructor(props) {
    super(props);
    this.state = { keyLog: false, value: "", keyDown: "" };
    // this.renderKeyLogger = (e) => {

    // };
  }
  handleKeyLogger = () => {
    this.setState({ keyLog: !this.state.keyLog });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown = (e) => {
    console.log(e);
    if (this.state.keyLog)
      this.setState({
        keyDown: e.key,
      });
    console.log(e.key);
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    // window.addEventListener("onKeyPress", this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleKeyLogger}
        >
          key Logger
        </button>

        {this.state.keyLog ? (
          <Keylogger handleClose={this.handleKeyLogger} data={this.state.keyDown} status={this.state.keyLog} />
        ) : (
          <div>Close</div>
        )}
      </div>
    );
  }
}
export default buttonOpen;
