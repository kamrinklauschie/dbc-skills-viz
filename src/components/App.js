import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Navbar from './Navbar';

const history = createHistory();
const getPath = () => history.location.pathname;

const routes = {
  '/': <Homepage history={history} />,
};

const getPage = path => routes[path] || <NotFound />;

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
    const page = getPage(this.state.path);
    return (
      <div>
        <Navbar history={history} />
        {page}
      </div>
    );
  }
}

export default App;
