import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      ConnectX
    </NavigationItem>
    <NavigationItem link="/login">Login</NavigationItem>
    <NavigationItem link="/signup">SignUp</NavigationItem>
    <NavigationItem link="/profile">Profile</NavigationItem>
  </ul>
);

export default navigationItems;
