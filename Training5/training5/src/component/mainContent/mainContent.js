import React, { Component } from "react";
import { Col, Nav, Row } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainContent.css";
import Dashboard from "../dashboard/dashboard";
import { MyInfo } from "../myInfo/myInfo";
import { ListUserBoard } from "../listUserBoard/listUserBoard";
class MainContent extends Component {
  
  render() {
    return (
      <Row>
        <Router >
          <Col xs={2} style={{ borderRight: "1px solid" }}>
            <Nav>
              {/* <NavLink href="#" style={{ width: "100%" }}>
              Home
            </NavLink>
            <NavLink href="/users" style={{ width: "100%" }}>
              User
            </NavLink>
            <NavLink href="#" style={{ width: "100%" }}>
              My info
            </NavLink> */}
              <ul>
                <li>
                  <Link className="text-decor-none" to="/app">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-decor-none" to="/app/users">
                    user
                  </Link>
                </li>
                <li>
                  <Link className="text-decor-none" to="/app/my-info">
                    My info
                  </Link>
                </li>
              </ul>
              <hr />
            </Nav>
          </Col>
          <Col>
            <Switch>
              <Route exact path="/app" component={Dashboard} />
              <Route path="/app/users" component={ListUserBoard} />
              <Route
                exact
                path="/app/my-info"
                component={MyInfo}
                // render={(props) => <MyInfo value="Hello, " {...props} />}
              />
            </Switch>
          </Col>
        </Router>
      </Row>
    );
  }
}

export default MainContent;
