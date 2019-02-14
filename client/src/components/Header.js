import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated & this.props.signInUser) {
      return (
        <div>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    const { signInUser, user } = this.props;
    let name;

    if (user) {
      name = user.name;
    } else if (signInUser) {
      name = signInUser.name;
    }

    return (
      <nav className="blue">
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            {name && (
              <>
                <li>
                  <Link to="/profile">{name}'s profile</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="right">{this.renderLinks()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    signInUser: state.auth.user,
    user: state.users.user
  };
}

export default connect(mapStateToProps)(Header);
