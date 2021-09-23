import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import { userAction } from "../../redux/actions/user.action";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {UserProfile} from "../userProfile/userProfile";
// import Invalid from "../invalid/invalid";
class ListUserBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { listUsers: [] };
  }

  async componentWillMount() {
    await this.props.getAll(this.props.user.role);
    await this.setState({ listUsers: this.props.listUsers });
    if(this.props.error){
      alert("You have not permission to do it");
      console.log(this.props);
      this.props.history.push("/app")
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // this.state.items = this.props.items;
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({ listUsers: this.props.listUsers });
    }
    //  this.setState({ items: this.props.items });
  }

  render() {
    return (
      <div>
        <Router>
          <Row>
            <Col xs={3}>
              <ul>
                {this.state.listUsers &&
                  this.state.listUsers.map((user) => {
                    return (
                      <li style={{ marginTop: "10px" }}>
                        <Link
                          //
                          to={`/app/users/${user.id}`}
                        >
                          {user.fullName}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col>
              <Switch>
                <Route
                  //

                  path="/app/users/:id"
                  //   component={Todo}
                  render={(props) =>  <UserProfile listUsers={this.props.listUsers} {...props} />}
                />
                {/* {this.state.listUsers &&
                  this.state.listUsers.map((user) => {
                    console.log(user);
                    return <div></div>;
                  })} */}
                {/* <Route exact path="/task1" component={Todo} /> */}
                {/* <Route
                  path="/app/user/*"
                  // component={Invalid}
                  render={(props) => (
                    <Invalid listUsers={this.state.listUsers} {...props} />
                  )}
                /> */}
              </Switch>
            </Col>
          </Row>
        </Router>
      </div>
    );
  }
}

// export default ListUserBoard;

function mapSate(state) {
  const { listUsers, error } = state.userReducer;
  const { user } = state.authenReducer;
  return { listUsers, user, error };
}

const actionCreators = {
  getAll: userAction.getAll,
};
// export default MyInfo
const connectMyInfo = connect(mapSate, actionCreators)(ListUserBoard);
export { connectMyInfo as ListUserBoard };
