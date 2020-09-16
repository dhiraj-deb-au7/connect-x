import { userSchema } from "../schemas";
import { hashPassword, comparePassword } from "../utils";

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
    return new Promise(async (res, rej) => {
      // try{
      //   const User = await userSchema.findOne({ email:user.email })
      //   if(!User) throw new Error('Unable to login')
      //   const isMatch = await comparePassword(user.password,User.password)
      //   if(!isMatch) throw new Error('Unable to Login')
      //   res(User)
      // }catch(error){
      //   rej(error.message)
      // }
      return new Promise(async (res, rej) => {
        userSchema.findOne({ email: user.email }, async (err, info) => {
          if (err) {
            rej(err);
          } else {
            const isMatch = await comparePassword(user.password, info.password);
            if (!isMatch) {
              rej({ error: "password did not match" });
            } else {
              res(info);
            }
          }
        });
      });
    });
  };
}

export default new User();
