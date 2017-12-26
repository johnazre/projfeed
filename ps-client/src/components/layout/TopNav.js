import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../../actions/auth'
import { Link } from 'react-router-dom'

class TopNav extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showLogin = () => {
    console.log('nav props', this.props);
    if(!this.props.authed) {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>
      )
    } else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/logout" onClick={() => this.props.userLogout()}>Logout</NavLink>
          </NavItem>
        </Nav>

      )
    }
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Projfeed</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.showLogin()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    authed: state.auth.authed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
