import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Link from './Link';
import historyProp from './types/history';

class NavbarComponent extends PureComponent {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link path={'/'} history={this.props.history}>DBC-Skills</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link path={'/first/'} history={this.props.history}>First</Link></NavItem>
          <NavItem><Link path={'/second/'} history={this.props.history}>Second</Link></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

NavbarComponent.propTypes = {
  history: historyProp.isRequired,
};

export default NavbarComponent;
