import React, { Component } from "react";
import Keylogger from "./../keylogger/keylogger";

class buttonOpen extends Component {
  constructor(props) {
    super(props);
    this.state = { keyLog: false, value: "", keyDown: "" };
    
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleKeyDown = (e) => {
    if (this.state.keyLog)
      this.setState({
        keyDown: e.keyCode,
      });
    // console.log(e.keyCode);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  renderKeyLogger = () => {
    this.setState({ keyLog: !this.state.keyLog });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.renderKeyLogger;
          }}
        >
          key Logger
        </button>

        {this.state.keyLog ? (
          <Keylogger data={this.state.keyDown} status={this.state.keyLog} />
        ) : (
          <div>Close</div>
        )}
      </div>
    );
  }
}
export default buttonOpen;
