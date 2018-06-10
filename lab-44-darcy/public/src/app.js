import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import HomePage from './components/HomePage.js';
import SpotItPage from './components/SpotItPage.js';

// export default class HomePage extends Component {
//   render() {
//     return <Fragment>
//       <h1>My Game App</h1>
//       <p>Please select a game:</p>
//       <p><Link to="/spot-it">SpotIt</Link></p>
//     </Fragment>;
//   }
// }

class App extends Component {
  render() {
    return <BrowserRouter>
      <Fragment>
        <Route path="/" component={HomePage} />
        {/* <Route path="/spot-it" component={SpotItPage} /> */}
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);