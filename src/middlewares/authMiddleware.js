import jwt from "jsonwebtoken";
import { AUTH_COOKIE_NAME, secret } from "../config/index.js";

export const auth = (req, res, next) => {
  const token = req.cookies[AUTH_COOKIE_NAME];

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
    res.clearCookie(AUTH_COOKIE_NAME);

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
