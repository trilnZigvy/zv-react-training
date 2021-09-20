import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import CityBoard from "../cityBoard/cityBoard";
import "./locationBar.css";
export default class LocationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      showArt: true,
      showOutDoor: false,
      showCabin: false,
      showBeach: false,
      showPopular: false,
      showUnquie: false,
    };
  }
  onClickLocation = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "1":
        this.setState({
          showArt: true,
          showOutDoor: false,
          showCabin: false,
          showBeach: false,
          showPopular: false,
          showUnquie: false,
        });
        break;
      case "2":
        this.setState({
          showArt: false,
          showOutDoor: true,
          showCabin: false,
          showBeach: false,
          showPopular: false,
          showUnquie: false,
        });
        break;
      case "3":
        this.setState({
          showArt: false,
          showOutDoor: false,
          showCabin: true,
          showBeach: false,
          showPopular: false,
          showUnquie: false,
        });
        break;
      case "4":
        this.setState({
          showArt: false,
          showOutDoor: false,
          showCabin: false,
          showBeach: true,
          showPopular: false,
          showUnquie: false,
        });
        break;
      case "5":
        this.setState({
          showArt: false,
          showOutDoor: false,
          showCabin: false,
          showBeach: false,
          showPopular: true,
          showUnquie: false,
        });
        break;
      case "6":
        this.setState({
          showArt: false,
          showOutDoor: false,
          showCabin: false,
          showBeach: false,
          showPopular: false,
          showUnquie: true,
        });
        break;
    }
    // console.log(this.state);
  };

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <div style={{ display: "flex" }}>
          <h2>
            <span>{this.state.title}</span>
          </h2>
        </div>
        <Row>
          <Col xs={2}>
            <Button
              className="_1y4zhnvj"
              value="1"
              onClick={this.onClickLocation}
            >
              Destinations for arts & culture
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              className="_1y4zhnvj"
              value="2"
              onClick={this.onClickLocation}
            >
              Destinations for outdoor adventure
            </Button>
          </Col>
          <Col xs={1}>
            <Button
              className="_1y4zhnvj"
              value="3"
              onClick={this.onClickLocation}
            >
              Mountain cabins
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              className="_1y4zhnvj"
              value="4"
              onClick={this.onClickLocation}
            >
              Beach destinations
            </Button>
          </Col>
          <Col xs={2}>
            <Button
              className="_1y4zhnvj"
              value="5"
              onClick={this.onClickLocation}
            >
              Popular destinations
            </Button>
          </Col>
          <Col xs={1}>
            <Button
              className="_1y4zhnvj"
              value="6"
              onClick={this.onClickLocation}
            >
              Unique Stays
            </Button>
          </Col>
        </Row>
        <CityBoard
          showArt={this.state.showArt}
          showOutDoor={this.state.showOutDoor}
          showCabin={this.state.showCabin}
          showBeach={this.state.showBeach}
          showPopular={this.state.showPopular}
          showCabin={this.state.showUnquie}
        />
      </Container>
    );
  }
}
