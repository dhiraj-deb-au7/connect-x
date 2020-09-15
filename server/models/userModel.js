import { userSchema } from "../schemas";
import { hashPassword } from "../utils";

class User {
  signup = (user) => {
    return new Promise(async (res, rej) => {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: await hashPassword(user.password),
      };

      userSchema.create(newUser, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  login = (user) => {
    return new Promise((res,rej) => {
      const user = userSchema.findOne({_id: id},(err,info) => {
        if (err) { 
          rej(err)
        }else{
          res(info)
        }
      })
    })
  }
}

export default new User();
