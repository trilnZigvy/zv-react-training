import React, { Component } from "react";
import Header from "../../components/header/header";
import { connect } from "react-redux";
// import { userAction } from "../../redux/actions/user.action";
import { loginAction } from "../../redux-saga/login/actions";
import { Container } from "reactstrap";
import Footer from "../../components/footer/footer";
import MainContent from "../../components/mainContent/mainContent";
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
      <Container>
        <Header
          key={new Date().getTime()}
          user={this.props.user}
          logout={this.props.logout}
        />
        <MainContent />
        <hr />
        <Footer />
      </Container>
    );
  }
}

function mapSate(state) {
  const { user } = state.loginReducer;
  // const user = {};
  return { user };
}

const actionCreators = {
  logout: loginAction.requestLogout,
};

const connectApp = connect(mapSate, actionCreators)(AppPage);
export { connectApp as AppPage };
// export default AppPage;
