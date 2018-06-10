import React, {Component, Fragment} from 'react';
import {
  Link,
  Route
} from 'react-router-dom';
// import ReactDOM from 'react-dom';

import SpotItPage from './SpotItPage.js';

export default class HomePage extends Component {
  render() {
    return <Fragment>
      <h1>My Game App</h1>
      <p>Please select a game:</p>
      <p><Link to="/spot-it">SpotIt</Link></p>
      <Route path="/spot-it" component={SpotItPage} />
    </Fragment>;
  }
}