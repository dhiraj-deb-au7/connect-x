import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Signup } from "./containers/index";
import { Login } from "./containers/index";
import Layout from "./hoc/Layout/Layout";
import { Profile } from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Login} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
