import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import { Link } from "react-router-dom";

class Users extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  renderAdmin = user => {
    return (
      <div className="card-action">
        <Link to="/" className="ui button primary">
          Edit
        </Link>
        <Link to="/" className="ui button negative">
          Delete
        </Link>
      </div>
    );
  };

  renderUsers = () => {
    return this.props.users.map(user => {
      return (
        <div className="row" key={user._id}>
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image" />

              <div className="card-content">
                <span className="card-title">{user.name}</span>
                <p>{user.email}</p>
              </div>
              {this.renderAdmin(user)}
            </div>
          </div>
        </div>
      );
    });
  };

  render = () => {
    return <div>{this.renderUsers()}</div>;
  };
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
