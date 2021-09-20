import React, { Component } from "react";
import axios from "axios";
import * as _ from "underscore";
export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [], searchOption: "name", searchValue: "" };
    this.modeThrottle = _.throttle(this.modeChange, 1000);
    this.inputThrottle = _.throttle(this.inputChange, 1000);
  }

  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => {
        console.log(res);
        this.setState({
          value: res.data,
        });
        // console.log(this.state.value);
      })
      .catch((error) => console.log(error));
  }

  modeChange = (e) => {
    this.setState({ searchOption: e.target.value });
    console.log(
      `https://restcountries.eu/rest/v2/${e.target.value}/${this.state.searchValue}`
    );
    axios
      .get(
        `https://restcountries.eu/rest/v2/${e.target.value}/${this.state.searchValue}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          value: res.data,
        });
        // console.log(this.state.value);
      })
      .catch((error) => console.log(error));
  };

  inputChange = (e) => {
    this.setState({ searchValue: e.target.value });
    console.log(
      `https://restcountries.eu/rest/v2/${this.state.searchOption}/${e.target.value}`
    );
    axios
      .get(
        `https://restcountries.eu/rest/v2/${this.state.searchOption}/${e.target.value}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          value: res.data,
        });
        // console.log(this.state.value);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <input onChange={this.inputThrottle}></input>
        <select value={this.state.searchOption} onChange={this.modeThrottle}>
          <option value="name">name</option>
          <option value="callingcode">Calling code</option>
          <option value="region">region</option>
        </select>
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>region</th>
              <th>calling Codes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.value &&
              this.state.value.map((c) => {
                return (
                  <tr>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {c.name}
                    </td>
                    <td style={{ textAlign: "left" }}>{c.region}</td>
                    <td>{c.callingCodes}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
