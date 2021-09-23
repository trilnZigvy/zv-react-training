import React, { Component } from "react";
import Header from "../../component/header/header";
import { connect } from "react-redux";
import { userAction } from "../../redux/actions/user.action";
import MainContent from "../../component/mainContent/mainContent";
class AppPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  shouldComponentUpdate(){
    return true;
  }

  componentWillMount(){
      if (!this.props.user) {
        this.props.history.push("/login");
      }
  }
  componentDidUpdate() {
    if (!this.props.user) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <Header  key={new Date().getTime()} user={this.props.user} logout={this.props.logout} />
        <MainContent />
      </div>
    );
  }
}

function mapSate(state) {
  const { user } = state.authenReducer;
  return { user };
}

const actionCreators = {
  logout: userAction.logout,
};

const connectApp = connect(mapSate, actionCreators)(AppPage);
export { connectApp as AppPage };
// export default AppPage;
