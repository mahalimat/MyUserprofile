import React, { Component } from "react";
import requireAuth from "./requireAuth";
import { connect } from "react-redux";

class Feature extends Component {
  render() {
    console.log("props at feature:", this.props);
    const { name, email, craete } = this.props.user;
    return (
      <div>
        <p>Hello {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state at feature:", state);
  return { user: state.auth.user };
}

export default connect(mapStateToProps)(requireAuth(Feature));
