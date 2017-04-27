import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import logo from './logo.svg';
import './App.css';

const history = createHistory();
const getPath = () => history.location.pathname;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: getPath(),
    };
    this.unlistenFromHistory = null;
  }

  componentDidMount() {
    this.unlistenFromHistory = history.listen(() => this.setState({ path: getPath() }));
  }

  componentWillUnmount() {
    this.unlistenFromHistory();
    this.unlistenFromHistory = null;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello, Heroku! { this.state.path }
        </p>
      </div>
    );
  }
}

export default App;
