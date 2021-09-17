import React, { Component } from "react";

class countDown extends Component {
  constructor(props) {
    super(props);

    this.timer = 0;
    this.state = {
      number: this.props.data,
    };
    this.countDown = this.countDown.bind(this);
    this.start = this.start.bind(this);
    this.stopCount = this.stopCount.bind(this)
  }

  start() {
    if (this.timer == 0 &&  this.state.number > 0) {
      console.log(13);
      this.timer = setInterval(this.countDown, 1000);
      console.log(this.state.number);
    }
  }

  countDown() {
    let number = this.state.number - 1;
    this.setState({
      number: number,
    });
    if ( this.state.number == 0) {
      clearInterval(this.timer);
    }
  }

  stopCount(){
      clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {!isNaN(this.props.data) && (
          <div>
            <p>{this.state.number}</p>
            {this.start()}
            <button type="button" onClick={this.stopCount}>stop</button>
          </div>
        )}
      </div>
    );
  }
}

export default countDown;
