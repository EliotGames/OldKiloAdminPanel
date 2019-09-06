import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
} from 'react-bootstrap';

const Header = ({ showMobileMenu, toggleMobileNavVisibility }) => (
  <Navbar fluid={true}>
    <Navbar.Header>
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        onClick={toggleMobileNavVisibility}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem>Account</NavItem>
        <NavDropdown title="Dropdown" id="right-nav-bar">
          <MenuItem>Action</MenuItem>
          <MenuItem>Another action</MenuItem>
          <MenuItem>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem>Separated link</MenuItem>
        </NavDropdown>
        <NavItem>Log out</NavItem>
      </Nav>
      <Navbar.Form pullRight>
        <FormGroup>
          <span className="input-group-addon">
            <i className="fa fa-search"></i>
          </span>
          <FormControl type="text" placeholder="Type to search" />
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(
  null,
  mapDispatchToProp
)(Header);
