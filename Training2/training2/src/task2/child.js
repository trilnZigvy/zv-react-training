import React, { Component } from 'react'

export class child extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-titke">Modal title</h4>
          </div>
          <div className="modal-footer">Hello</div>
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

export default child
