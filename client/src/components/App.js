import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./auth/Signup";
import Profile from "./Profile";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";
import Users from "./user/Users";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
            <Route path="/users" component={Users} />
            <Route exact path="/user/:userId" component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
