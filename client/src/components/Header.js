import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    console.log("props at Header:", this.props);
    if (this.props.authenticated) {
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
    const display =
      this.props.authenticated && this.props.user && this.props.user.name;
    return (
      <nav className="blue">
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            {display && (
              <>
                <li>
                  <Link to="profile">{this.props.user.name}'s profile</Link>
                </li>
                <li>
                  <Link to="users">Users</Link>
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
  return { authenticated: state.auth.authenticated, user: state.auth.user };
}

export default connect(mapStateToProps)(Header);
