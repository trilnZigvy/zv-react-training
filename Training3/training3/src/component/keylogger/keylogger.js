import React, { Component } from "react";
import "./keylogger.css";

class keylogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      keyDown: this.props.keyDown,
     
    };
  }

  //   static getDerivedStateFromProps(props,state) {
  //     if(props.data == ''){
  //         return null
  //     }
  //     console.log(1);
  //     console.log(props.data);
  //     state.value = [...state.value, String.fromCharCode(props.data)];
  //     console.log(state.value);
  //     return { keyDown: props.data };
  //   }

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {
    nextState.keyDown = nextProps.data;
    if (nextProps.data > 47 && nextProps.data <= 90) {
      nextState.value = [
        ...nextState.value,
        String.fromCharCode(nextProps.data),
      ];
    } else {
      nextState.value = [
        ...nextState.value,
        "keyCode: " + String(nextProps.data),
      ];
    }
    return null;
    // console.log(nextState.value);
  }

  // componentDidUpdate(prevProps, prevState) {
  //     console.log(prevProps);
  //     console.log(prevState);
  // }

  //   componentWillUnmount() {}

  render() {
    // console.log(keyboardMap[Number(this.state.keyDown)]);
    return (
      // <div>
      //   {this.props.status ? "start record" : "Close"}
      //   <p>
      //     <textarea
      //       type="text"
      //       style={{ width: "300px", height: "150px" }}
      //       // onKeyDown={this.handleKeyDown}
      //       value={
      //         "Button " + this.state.keyboardMap[Number(this.state.keyDown)]
      //       }
      //     ></textarea>
      //   </p>
      //   {/* <p>{this.state.value}</p> */}
      // </div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-titke">start recording</h4>
          </div>
          <div className="modal-body">
            <textarea
              type="text"
              style={{ width: "300px", height: "150px" }}
              // onKeyDown={this.handleKeyDown}
              value={
                // "Button " + this.state.keyboardMap[Number(this.state.keyDown)]
                this.state.keyDown == " "
                  ? "Button space"
                  : "Button " + this.state.keyDown
              }
            ></textarea>
          </div>
          <div className="modal-footer">
            <button onClick={this.props.handleClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default keylogger;
