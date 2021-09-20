import React, { Component } from "react";
import axios from "axios";
import * as _ from "underscore";
import Country from "../task2/country";
export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", type: "", punchline: "", setup: "", last: 0 };
    this.jokeThrottle = _.throttle(this.getJoke, 1000);
  }
  getJoke = () => {
    axios
      .get(`http://localhost:3005/jokes/random`)
      .then((res) => {
        console.log(res);
        this.setState({
          id: res.data.id,
          setup: res.data.setup,
          type: res.data.type,
          punchline: res.data.punchline,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3005/jokes/random`)
      .then((res) => {
        console.log(res);
        this.setState({
          id: res.data.id,
          setup: res.data.setup,
          type: res.data.type,
          punchline: res.data.punchline,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Country />
        <p>id: {this.state.id}</p>

        <p>type: {this.state.type}</p>
        <p>setup: {this.state.setup}</p>
        <p>punchline: {this.state.punchline}</p>
        <button onClick={this.jokeThrottle}>get More Joke</button>
      </div>
    );
  }
}
