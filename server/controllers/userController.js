import { User } from "../models";
import { comparePassword } from "../utils";

const userController = {
  signup: async (req, res) => {
    try {
      const user = await User.signup(req.body);
      res.status(200).send("user created successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.login(req.body);
      if (user) {
        if (await comparePassword(req.body.password, user.password)) {
          res.status(200).send("user loggedIn successfully!");
        } else {
          res.status(400).send("password did not match!");
        }
      } else {
        res.status(404).send("user not found! please signup first...");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
