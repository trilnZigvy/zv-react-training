import React, { Component } from 'react'

export default class Card2 extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: this.props.name,
            imgSrc: this.props.imgSrc,
            subValue: this.props.subValue
        }
    }
    render() {
        return (
          <div className="card" style={{ border: "none" }}>
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
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div>
              <b>{this.state.name}</b>
            </div>
            {this.state.subValue ? (
              <div>{this.state.subValue}</div>
            ) : (
              <div></div>
            )}
          </div>
        );
    }
}
