import React, { Component } from 'react';
import { connect } from "react-redux";
class MyInfo extends Component {
    constructor(props){
        super(props)
        this.state = {user: this.props.user}
    }
    render() {
        return (
          <div>
            <p>fullName: {this.state.user.fullName}</p>
            <p>Email: {this.state.user.email}</p>
            <p>password: {this.state.user.password}</p>
            <p>id: {this.state.user.id}</p>
            <p>role: {this.state.user.role}</p>
          </div>
        );
    }
}

function mapSate(state) {
  const { user } = state.loginReducer;
  return { user };
}

const actionCreators = {
};
// export default MyInfo
const connectMyInfo = connect(mapSate, actionCreators)(MyInfo);
export { connectMyInfo as MyInfo };