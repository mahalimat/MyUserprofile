import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Redirect, Link } from "react-router-dom";

class Profile extends Component {
  componentDidMount = () => {
    const userId = this.props.match.params.userId;

    if (userId) {
      this.props.fetchUser(userId);
    }
  };

  render = () => {
    const { signInUser, user } = this.props;

    if (!signInUser) {
      return <Redirect to="/signIn" />;
    }

    let name;
    let email;

    if (user) {
      name = user.name;
      email = user.email;
    } else {
      name = signInUser.name;
      email = signInUser.email;
    }

    return (
      <div>
        <p>Hello {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { signInUser: state.auth.user, user: state.users.user };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Profile);
