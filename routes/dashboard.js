const express = require("express");
const router = express.Router();

const { dashboard, settings } = require("../controllers/dashboardController");
const { login, signup } = require("../controllers/authController");

/* GET dashboard page. */
router.get("/", dashboard);

router.get("/settings", settings);

router.get("/login", login);

router.get("/signup", signup);

module.exports = router;
