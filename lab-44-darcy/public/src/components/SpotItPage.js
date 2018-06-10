import React, {Component, Fragment} from 'react';
import SpotIt from './SpotIt.js';

export default class SpotItPage extends Component {
  render() {
    return <Fragment>
      <h1>Spot It</h1>
      <p>Directions:</p>
      <p>Please select the one item from each column that are the SAME!</p>
      <SpotIt />
    </Fragment>;
  }
}