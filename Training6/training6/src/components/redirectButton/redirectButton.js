import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {LoginPage} from '../../task1/loginPage/loginPage';
import {AppPage} from '../../task1/appPage/appPage';
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
            {/* <Route exact path="/task1" component={} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/app" component={AppPage} />
            <Route path="/*" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
}
