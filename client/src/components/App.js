import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" component={Signup} />
            <Route path="/feature" component={Feature} />
            <Route path="/signout" component={Signout} />
            <Route path="/signin" component={Signin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
