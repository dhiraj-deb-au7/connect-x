import React, { Component } from "react";
import axios from "axios";

import { SignupPage } from "../../components";

class Signup extends Component {
  state = {
    error: "",
    formdata: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  };

  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();
  confirmPasswordRef = React.createRef();

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
      const data = await axios.post("http://localhost:5000/signup", {
        firstName: formdata.firstName,
        lastName: formdata.lastName,
        email: formdata.email,
        password: formdata.password,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const { formdata, error } = this.state;
    return (
      <SignupPage
        error={error}
        formdata={formdata}
        submitHandler={this.submitHandler}
        inputHandler={this.inputHandler}
        firstNameRef={this.firstNameRef}
        lastNameRef={this.lastNameRef}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
        confirmPasswordRef={this.confirmPasswordRef}
      />
    );
  }
}

export default Signup;
