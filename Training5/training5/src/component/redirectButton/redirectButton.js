import React from 'react'
// import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {Todo} from '../../task1/todo';
export default function redirectButton() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/task1">Task1</Link>
            </li>
            <li>
              <Link to="/test2">Task2</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/task1" component={Todo} />
            <Route exact path="/test2" />
          </Switch>
        </div>
      </Router>
    );
}
