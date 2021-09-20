import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Card from "../card/card";
import "./cardArea.css";
export default class CardArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [
        {
          name: "Ho Chi Minh City",
          timeTravel: "15min",
          src: "https://a0.muscache.com/im/pictures/20356d40-a45f-4680-a9d0-5bb0a3836e4d.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Nha Trang",
          timeTravel: "6.5 hours",
          src: "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Vung Tau",
          timeTravel: "2 hours",
          src: "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Phu Quoc",
          timeTravel: false,
          src: "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Can Tho",
          timeTravel: "3 hours",
          src: "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Tuy Hoa",
          timeTravel: "7.5 hours",
          src: "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Bien Hoa",
          timeTravel: "45 mins",
          src: "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720",
        },
        {
          name: "Phan Rang - Thap Cham",
          timeTravel: "5 hours",
          src: "https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=720",
        },
      ],
    };
  }
  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <div style={{ display: "flex" }}>
          <h2>
            <span>{this.props.title}</span>
          </h2>
        </div>
        <div className="card_area">
          {this.state.location &&
            this.state.location.map((loc) => {
              return (
                // <Col>
                <Card name={loc.name} timeTravel={loc.timeTravel} imgSrc={loc.src}/>
                // </Col>
              );
            })}
        </div>
      </Container>
    );
  }
}
