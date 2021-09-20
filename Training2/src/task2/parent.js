import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Child from './child'
export class parent extends Component {
    constructor(props){
        super(props)
        this.state = {showChild:true}
        this.close  =this.close.bind(this)
    }
    close(){
        this.setState({
          showChild: !this.state.showChild,
        });
    }

    render() {
        return (
          <div>
            <button onClick={this.close}>
              {this.state.showChild
                ? "Child model is opening"
                : "Child model is closing"}
            </button>
            {this.state.showChild && (
              <Child data={this.state.showChild} handleClose={this.close} />
            )}
          </div>
        );
    }
}

export default parent
