import React from "react";
import "./modal.css"
export default class Modal extends React.Component {
  constructor(props){
    super(props)
  }
  // hideModal =() => {
  //   this.setState({show: !this.state.show})
  // }
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-titke">Modal title</h4>
          </div>
          <div className="modal-footer">Content</div>
          <div className="modal-footer">
            <button onClick={this.props.onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    );
  }
}
