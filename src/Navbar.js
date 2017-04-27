import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavbarComponent extends PureComponent {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            DBC-Skills
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>First</NavItem>
          <NavItem>Second</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComponent;
