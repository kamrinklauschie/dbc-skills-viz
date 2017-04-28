import React, { PureComponent } from 'react';
import Markdown from 'react-markdown';

import historyProps from '../types/history';

const homepageContent = `# DBC Skills
Content goes here`;

class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Markdown source={homepageContent} />
      </div>
    );
  }
}

Homepage.propTypes = {
  history: historyProps.isRequired,
};

export default Homepage;
