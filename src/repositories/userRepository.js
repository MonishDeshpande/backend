const User = require("../schemas/userSchema");

class userRepository {
  async findUser(parameters) {
    try {
      const response = await User.findOne({ ...parameters });
      return response;
    } catch (err) {
      console.log(err);
    }
  }
  async createUser(userDetails) {
    try {
      const response = await User.create(userDetails);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = userRepository;
