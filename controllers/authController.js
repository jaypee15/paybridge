const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res, next) => {
  res.render("login", { title: "login" });
});

const signup = asyncHandler(async (req, res, next) => {
  res.render("register", { title: "signup" });
});



module.exports = { login, signup };
