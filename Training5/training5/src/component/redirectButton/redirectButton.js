import React from 'react'
// import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {Todo} from '../../task1/todo';
import {LoginPage} from '../../task2/loginPage/loginPage';
import {AppPage} from '../../task2/appPage/appPage';
export default function redirectButton() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/task1">Task1</Link>
            </li>
            <li>
              <Link to="/login">Task2</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/task1" component={Todo} />
            <Route path="/login" component={LoginPage} />
            <Route path="/app" component={AppPage} />
            <Route path="/*" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
}
