const asyncHandler = require("express-async-handler");

const app = asyncHandler(async function (req, res, next) {
  res.render("dashboard", { title: "Dashboard" });
});


module.exports = { app, settings };
