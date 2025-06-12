import jwt from "jsonwebtoken";
import { secret } from "../config/index.js";

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "2h" });

  return token;
}

export default generateToken;
