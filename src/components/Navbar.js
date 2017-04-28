import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Link from './Link';
import historyProp from './types/history';

class NavbarComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventKey) {
    this.props.history.push(`/${eventKey}`);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link path={'/'} history={this.props.history}>DBC-Skills</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav onSelect={this.onSelect}>
          <NavItem eventKey={'college-skills'}>College Skills</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

NavbarComponent.propTypes = {
  history: historyProp.isRequired,
};

export default NavbarComponent;
