const { model } = require("mongoose");
const UserService = require("../services/userService");
const userRepository = require("../repositories/userRepository");

async function createUser(req, res) {
  console.log("User Controller Called");
  console.log(req.body);
  const userServiceInstance = new UserService(new userRepository());
  console.log(userServiceInstance);
  try {
    const response = await userServiceInstance.registerUser(req.body);
    return res.json({
      message: "Successfully created a user ",
      success: true,
      data: response,
      error: {},
    });
  } catch (err) {
    return res.status(err.statusCode).json({
      message: "Failed to create user",
      success: false,
      data: {},
      error: err,
    });
  }
}

module.exports = {
  createUser,
};
