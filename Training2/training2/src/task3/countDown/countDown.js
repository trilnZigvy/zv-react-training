import React, { Component } from "react";

class countDown extends Component {
  constructor(props) {
    super(props);

    this.timer = 0;
    this.state = {
      number: this.props.data,
    };
    countDown = () => {
      let number = this.state.number - 1;
      setState({
        number: number,
      });
      if (this.state.number == 0) {
        clearInterval(this.timer);
      }
    };
    start = () => {
      if (this.timer == 0 && this.state.number > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    };
    stopCount = () => {
      this.timer = 0;
      clearInterval(this.timer);
    };
  }

  // componentWillUpdate(nextProps, nextState) {
  //   nextState.number = nextProps.data;
  // }

  render() {
    return (
      <div>
        {!isNaN(this.props.data) && (
          <div>
            <p>{this.state.number}</p>
            {this.start()}
            <button type="button" onClick={this.stopCount}>
              stop
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default countDown;
