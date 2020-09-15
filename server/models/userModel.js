import { userSchema } from "../schemas";

class User {
  signup = (user) => {
    return new Promise((res, rej) => {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };

      userSchema.create(user, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };
}

export default new User();
