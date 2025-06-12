import User from "../models/User.js";
import bcrypt from "bcrypt";

import generateToken from "../utils/userUtils.js";

export default {
  async register(userData) {
    if (userData.password !== userData.rePass) {
      throw new Error("Password mismatch");
    }

    const user = await User.findOne({ username: userData.username });
    if (user) {
      throw new Error("User already exist!");
    }

    const newUser = await User.create(userData);

    const token = generateToken(newUser);

    return token;
  },

  async login({ username, email, password }) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("No such user!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("User or pass is incorrect!!!");
    }

    const token = generateToken(user);

    return token;
  },
};
