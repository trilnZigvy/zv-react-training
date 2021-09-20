import React, { Component } from "react";
import './cityBoard.css'
export default class CityBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showArt: this.props.showArt,
      showOutDoor: this.props.showOutDoor,
      showCabin: this.props.showCabin,
      showBeach: this.props.showBeach,
      showPopular: this.props.showPopular,
      showUnquie: this.props.showUnquie,
    };
    this.state.ArtsNculture = [
      {
        value: "Phoenix",
        location: "Arizona",
      },
      {
        value: "Hot Springs",
        location: "Arkansas",
      },
      {
        value: "Los Angeles",
        location: "California",
      },
      {
        value: "San Diego",
        location: "California",
      },
      {
        value: "San Francisco",
        location: "California",
      },
      {
        value: "Barcelona",
        location: "Catalonia",
      },
      {
        value: "Prague",
        location: "Czechia",
      },
      {
        value: "Washington",
        location: "Catalonia",
      },
    ];
    this.state.Outdoor = [
      {
        value: "Lake Martin",
        location: "Alabama",
      },
      {
        value: "Banff",
        location: "Alberta",
      },
      {
        value: "Nerja",
        location: "Andalucía",
      },
      {
        value: "Greer",
        location: "Arizona",
      },
      {
        value: "Lake Powell",
        location: "Arizona",
      },
      {
        value: "North Rim",
        location: "Arizona",
      },
      {
        value: "Payson",
        location: "Arizona",
      },
      {
        value: "Lake Havasu City",
        location: "Arizona",
      },
    ];
    this.state.Cabin = [
      {
        value: "Banff",
        location: "Alberta",
      },
      {
        value: "Nerja",
        location: "Andalucía",
      },
      {
        value: "Greer",
        location: "Arizona",
      },
      {
        value: "Lake Powell",
        location: "Arizona",
      },
      {
        value: "North Rim",
        location: "Arizona",
      },
      {
        value: "Payson",
        location: "Arizona",
      },
      {
        value: "Lake Havasu City",
        location: "Arizona",
      },
    ];
    this.state.Beach = [
      {
        value: "Lake Martin",
        location: "Alabama",
      },
      {
        value: "Banff",
        location: "Alberta",
      },
      {
        value: "Nerja",
        location: "Andalucía",
      },
    ];
    this.state.Popular = [
      {
        value: "San Francisco",
        location: "California",
      },
      {
        value: "Barcelona",
        location: "Catalonia",
      },
      {
        value: "Prague",
        location: "Czechia",
      },
      {
        value: "Washington",
        location: "Catalonia",
      },
    ];
    this.state.Unquie = [
      {
        value: "Prague",
        location: "Czechia",
      },
      {
        value: "Washington",
        location: "Catalonia",
      },
    ];
  }
  componentDidUpdate(){
      this.state = {
        showArt: this.props.showArt,
        showOutDoor: this.props.showOutDoor,
        showCabin: this.props.showCabin,
        showBeach: this.props.showBeach,
        showPopular: this.props.showPopular,
        showUnquie: this.props.showUnquie,
      };
  };

  render() {
    return (
      <div className="city_board">
        {this.state.showArt &&
          this.state.ArtsNculture &&
          this.state.ArtsNculture.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
        {this.state.showOutDoor &&
          this.state.Outdoor &&
          this.state.Outdoor.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
        {this.state.showCabin &&
          this.state.Cabin &&
          this.state.Cabin.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
        {this.state.showBeach &&
          this.state.Beach &&
          this.state.Beach.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
        {this.state.showPopular &&
          this.state.Popular &&
          this.state.Popular.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
        {this.state.showUnquie &&
          this.state.Unquie &&
          this.state.Unquie.map((c) => {
            return (
              <div>
                <div>{c.value}</div>
                <div>{c.location}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
