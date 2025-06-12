import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.get("/register", isGuest, (req, res) => {
  res.render("user/register");
});
userController.post("/register", isGuest, async (req, res) => {
  const userData = req.body;

  try {
    const token = await userService.register(userData);

    res.cookie("auth", token);

    res.redirect("/");
  } catch (err) {
    const error = getErrorMessage(err);
    res.render("user/register", { error, userData });
  }
});

userController.get("/login", isGuest, (req, res) => {
  res.render("user/login");
});
userController.post("/login", isGuest, async (req, res) => {
  const loginData = req.body;

  try {
    const token = await userService.login(loginData);

    res.cookie("auth", token);

    res.redirect("/");
    // res.tempRedirect("/", { error: "Successful logged in!" });
  } catch (err) {
    const error = getErrorMessage(err);
    res.render("user/login", { error, user: loginData });
  }
});
userController.get("/logout", isAuth, async (req, res) => {
  res.clearCookie("auth");

  // token validation

  res.redirect("/");
});

export default userController;
