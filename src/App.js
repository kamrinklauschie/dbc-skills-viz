import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import Navbar from './Navbar';

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
      <div>
        <Navbar />
        <p>Hello, Heroku! { this.state.path }</p>
      </div>
    );
  }
}

export default App;
