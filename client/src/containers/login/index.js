import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../Store/actions";
import { LoginPage } from "../../components";

class Login extends Component {
  state = {
    error: "",
    formdata: {
      email: "",
      password: "",
    },
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { formdata } = this.state;
    this.setState({
      formdata: { ...formdata, [name]: value },
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const { formdata } = this.state;
    const { history } = this.props;
    this.props.onLogin(formdata.email, formdata.password);
  };

  render() {
    const { formdata, error } = this.state;
    return (
      <LoginPage
        error={error}
        formdata={formdata}
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.authLogin(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
