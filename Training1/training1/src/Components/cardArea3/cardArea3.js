import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Card2 from "../card2/card2";
import "./cardArea3.css";
export default class cardArea3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discover: [
        {
          value: "Experiences",
          subVal: "Find unforgettable activities near you.",
          src: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720",
        },
        {
          value: "Online Experiences",
          subVal: "Live, interactive activities led by Hosts.",
          src: "https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720",
        },
        {
          value: "Featured collection: Wanderlust",
          subVal: "Travel from home with Online Experiences.",
          src: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720",
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
          {this.state.discover &&
            this.state.discover.map((loc) => {
              return (
                <Col>
                  <Card2 name={loc.value} imgSrc={loc.src} subValue={loc.subVal}/>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}
