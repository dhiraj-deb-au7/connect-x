import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  console.log(props.isAuth);
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        ConnectX
      </NavigationItem>

      {!props.isAuth ? (
        <NavigationItem link="/login">Login</NavigationItem>
      ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
      {!props.isAuth ? (
        <NavigationItem link="/signup">SignUp</NavigationItem>
      ) : null}

      <NavigationItem link="/profile">Profile</NavigationItem>
    </ul>
  );
};

export default navigationItems;
