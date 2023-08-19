const UserModel = require('../model/users.model')

class UserService {
  static async registerUser(email,password){
    try{
           const createUser = new UserModel({email,password});
           return await createUser.save();
    }
    catch(err){
        throw err;
    }
  }

}

module.exports = UserService;