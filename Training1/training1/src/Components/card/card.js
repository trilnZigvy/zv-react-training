import React, { Component } from "react";
import { Col, Row } from "reactstrap";

export default class card extends Component {
  constructor(props) {
    super(props);
     this.state = {
       name: this.props.name,
       imgSrc: this.props.imgSrc,
       timeTravel: this.props.timeTravel,
     };
  }
  render() {
    return (
      <div
        className="card"
        style={{ display: "-webkit-inline-box", border: "none" }}
      >
        <div>
          <img
            class="_6tbg2q"
            aria-hidden="true"
            alt=""
            decoding="async"
            src={this.state.imgSrc}
            data-original-uri="https://a0.muscache.com/im/pictures/20356d40-a45f-4680-a9d0-5bb0a3836e4d.jpg?aki_policy=large"
            style={{
              objectFit: "cover",
              verticalAlign: "bottom;",
              height: "50px",
              width: "50px",
              borderRadius: "12px",
            }}
          />
        </div>
        <div>
          <b>{this.state.name}</b>
          <div>
            {this.state.timeTravel && (
              <div>{this.state.timeTravel + " drive"}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
