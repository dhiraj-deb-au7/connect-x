import { userSchema } from "../schemas";
import { hashPassword , comparePassword} from "../utils";

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
    return new Promise(async (res,rej) => {
      try{
        const User = await userSchema.findOne({ email:user.email })
        if(!User) throw new Error('Unable to login')
        const isMatch = await comparePassword(user.password,User.password)
        if(!isMatch) throw new Error('Unable to Login')
        res(User) 
      }catch(error){
        rej(error.message)
      }
     
    })
  }
}

export default new User();
