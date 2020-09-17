import React, { Component } from "react";
import axios from "axios";

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

    try {
      const { formdata } = this.state;
      const { history } = this.props;
      const data = await axios.post("/login", {
        email: formdata.email,
        password: formdata.password,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
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

export default Login;
