import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <form onSubmit={handleSubmit(this.onSubmit)} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <fieldset>
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  component="input"
                  autoComplete="none"
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <fieldset>
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="none"
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <fieldset>
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                />
              </fieldset>
            </div>
          </div>
          <div>{this.props.errorMessage}</div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Sign Up!
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
