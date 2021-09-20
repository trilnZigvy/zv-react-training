import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Card2 from "../card2/card2";
import "./cardArea2.css";
export default class CardArea2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeLocation: [
        {
          name: "Outdoor getaways",
          src: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
        },
        {
          name: "Unique stays",
          src: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
        },
        {
          name: "Entire Home",
          src: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
        },
        {
          name: "Pet Allowed",
          src: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
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
        <Row className="">
          {this.state.typeLocation &&
            this.state.typeLocation.map((loc) => {
              return (
                <Col>
                  <Card2 name={loc.name} imgSrc={loc.src} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}
