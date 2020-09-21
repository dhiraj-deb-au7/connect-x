import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Signup } from "./containers/index";
import { Login } from "./containers/index";
import Layout from "./hoc/Layout/Layout";
import { Profile } from "./components/User";
import * as actions from "./Store/actions";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(actions.authCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
