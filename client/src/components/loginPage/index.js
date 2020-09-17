import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import classes from "./loginPage.module.css";
import LoginImage from "../../assets/images/Home-Page-login.jpg";

const loginPage = (props) => {
  const {
    error,
    submitHandler,
    inputHandler,
    formdata: { email, password },
    emailRef,
    passwordRef,
  } = props;

  return (
    <div className={classes.Container}>
      {error && <Label>{error}</Label>}
      <Form className={classes.Form} onSubmit={submitHandler}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className={classes.Input}
            id="email"
            name="email"
            value={email}
            onChange={inputHandler}
            placeholder="Enter your email id"
            ref={emailRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            className={classes.Input}
            id="password"
            name="password"
            value={password}
            onChange={inputHandler}
            placeholder="Enter a passwrod"
            ref={passwordRef}
          />
        </FormGroup>

        <div>
          <Button type="submit">Login</Button>
        </div>
      </Form>
      <div className={classes.LoginImage}>
        <img src={LoginImage} alt="social Media Image" />
      </div>
    </div>
  );
};

export default loginPage;
