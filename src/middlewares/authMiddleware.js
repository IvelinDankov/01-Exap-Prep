import jwt from "jsonwebtoken";
import { secret } from "../config/index.js";

export const auth = (req, res, next) => {
  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }

  const user = jwt.verify(token, secret);

  try {
    req.user = user;
    req.isAuthenticated = true;

    res.locals.user = user;
    res.locals.isAuthenticated = true;
    return next();
  } catch (err) {
    res.clearCookie("auth");

    res.redirect("/users/register");
  }
};

export const isAuth = (req, res, next) => {
  if (!req.isAuthenticated) {
    return res.redirect("/users/login");
  }

  next();
};

export const isGuest = (req, res, next) => {
  if (req.isAuthenticated) {
    return res.redirect("/");
  }

  next();
};
