import React, { Component } from 'react'

export class child extends Component {
  constructor(props){
      super(props)
      this.state = { show: this.props.showChild };
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleClose}>
          {console.log(this.props.data)} close ChildModel
        </button>
      </div>
    );
  }
}

export default child
