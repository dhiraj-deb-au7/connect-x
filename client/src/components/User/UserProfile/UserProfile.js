import React, { Fragment } from "react";
import classes from "./index.module.css";
import profilePic from "../../../assets/images/logo.png";

const profile = (props) => {
  return (
    <Fragment>
      <div className={classes.Container}>
        <div>
          <div className={classes.Image}>
            <img scr={profilePic} alt="profile picture" />
          </div>
          <div className={classes.UserConfig}>
            <h4>Posts</h4>
            <h4>Followers</h4>
            <h4>Following</h4>
          </div>
        </div>
        <div className={classes.Profile}>
          <h4>UserName</h4>
          <p>Some randon Status</p>
        </div>
        <div className={classes.Button}>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className={classes.Posts}>
        <div className={classes.Post}></div>
      </div>
    </Fragment>
  );
};

export default profile;
