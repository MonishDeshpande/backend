class UserService {
  constructor(_userRepository) {
    this.userRepository = _userRepository;
  }
  async registerUser(userDetails) {
    console.log("Hitting service layer");
    // It will create a brand new user into the DB
    // 1. Check whether the user already exists

    const user = await this.userRepository.findUser({
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber,
    });

    if (user) {
      throw { reason: "User already exists", statusCode: 400 };
    }

    // 2. If not, create a new user

    const newUser = await this.userRepository.createUser({
      email: userDetails.email,
      password: userDetails.password,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNumber: userDetails.mobileNumber,
    });

    if (!newUser) {
      throw { reason: "Cannot create User", statusCode: 500 };
    }
    // 3. Return the user details
    return newUser;
  }
}

module.exports = UserService;
