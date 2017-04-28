import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import historyProp from './types/history';
import childrenProp from './types/children';

class Link extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push(this.props.path);
  }
  render() {
    return (<a href={this.props.path} onClick={this.onClick}>
      {this.props.children}
    </a>);
  }
}

Link.propTypes = {
  history: historyProp.isRequired,
  path: PropTypes.string.isRequired,
  children: childrenProp,
};

Link.defaultProps = {
  children: [],
};

export default Link;
