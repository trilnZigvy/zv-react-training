import React, { Component } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import "./loginPage.css";
// import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { userAction } from "../../redux/actions/user.action";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  //   validateForm = () => {
  //     //   return true
  //     // return this.state.email.length > 0 && this.state.password > 0;
  //   };

  // componentDidMount(){
  //     this.props.login("ad@gmail.com", "1234567")
  // }

  handleSubmit = (e) => {
    if (!this.state.email || !this.state.password) {
      alert("missing field");
      e.preventDefault();
      return;
    } else {
      this.props.login(this.state.email, this.state.password);
    }
    e.preventDefault();
    // this.props.history.push("/app");
    // return <Route exact path="/app" component={LoginPage} />;
  };

  componentDidMount(){
    if(this.props.user){
      this.props.history.push("/app");
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.history.push("/app");
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="Login">
          <FormGroup className="padding-6px" className="inline-flex">
            <Label for="exampleEmail" className="padding-6px">
              Email
            </Label>
            <Input
              style={{ marginLeft: "45px" }}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <p />
          <FormGroup className="padding-6px" className="inline-flex">
            <Label for="examplePassword" className="padding-6px">
              Password
            </Label>
            <Input
              style={{ marginLeft: "16px" }}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </FormGroup>
          <p />
          <Button className="btn" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

function mapSate(state) {
  const { user } = state.authenReducer;
  // console.log(user);
  return { user };
}

const actionCreators = {
  login: userAction.login,
};
const connectLogin = connect(mapSate, actionCreators)(LoginPage);
export { connectLogin as LoginPage };
