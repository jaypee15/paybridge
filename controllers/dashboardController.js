const asyncHandler = require("express-async-handler");

const app = asyncHandler(async function (req, res, next) {
  res.render("dashboard", { title: "Dashboard" });
});

const settings = asyncHandler(async function (req, res, next) {
  res.render("settings", { title: "Settings" });
});

module.exports = { app, settings };
