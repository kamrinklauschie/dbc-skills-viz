import React, { PureComponent } from 'react';

import historyProps from '../types/history';

class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <p>This is the homepage</p>
      </div>
    );
  }
}

Homepage.propTypes = {
  history: historyProps.isRequired,
};

export default Homepage;
