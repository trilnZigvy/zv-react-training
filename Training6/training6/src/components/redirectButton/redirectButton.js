import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {LoginPage} from '../../task1/loginPage/loginPage';
import {AppPage} from '../../task1/appPage/appPage';
import {Submission} from '../../task2/submission';
export default function redirectButton() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">task1</Link>
            </li>
            <li>
              <Link to="/task2">task2</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/task2" component={Submission} />
            <Route path="/login" component={LoginPage} />
            <Route path="/app" component={AppPage} />
            <Route path="/*" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
}
