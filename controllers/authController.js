const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res, next) => {
  res.json(200);
});

const signup = asyncHandler(async (req, res, next) => {
  res.json(200);
});



module.exports = { login, signup };
