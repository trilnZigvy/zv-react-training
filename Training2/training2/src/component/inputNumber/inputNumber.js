import React, { Component } from "react";
import ValidCheck from "../validCheck/validCheck";
export default class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", setData: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.setState({setData: this.state.value});
  }

  render() {
    return (
      <div>
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" value="Submit" onClick={this.handleClick}>
          {" "}
          submit{" "}
        </button>
        <ValidCheck data={this.state.setData} />
      </div>
    );
  }
}
