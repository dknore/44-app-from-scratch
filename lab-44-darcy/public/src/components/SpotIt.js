import React, {Component, Fragment} from 'react';
import SpotItEngine from './SpotItEngine.js';

export default class SpotIt extends Component {
  constructor(props) {
    super(props);
    this.engine = new SpotItEngine();
    this.state = this.engine.getState();
  }

  handleClick = () => {
    this.engine.isMatch(symbol);
    this.setState(this.engine.getState());
  }

  render() {
    return <Fragment>
      <div>
        Guesses Left: {this.state.guessesLeft}
      </div>
      <div>
        {this.state.card1.map((symbol, index) => {
          return <button key={index} onClick={() => this.handleClick(symbol)}>{symbol} </button>;
        })}
      </div>
      <div>
        {this.state.card2.map((symbol, index) => {
          return <button key={index} onClick={() => this.handleClick(symbol)}>{symbol} </button>;
        })}
      </div>
    </Fragment>;
  }
}