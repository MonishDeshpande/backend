const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [5, "First name must be at least 5 characters long"],
      lowercase: true,
      trim: true,
      maxlength: [20, "First name must be at most 20 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [5, "Last name must be at least 5 characters long"],
      lowercase: true,
      trim: true,
      maxlength: [20, "Last name must be at most 20 characters long"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      trim: true,
      maxlength: [10, "Mobile number must be 10 digits long"],
      minlength: [10, "Mobile number must be 10 digits long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
