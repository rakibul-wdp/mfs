const express = require("express");
const router = express.Router();
const { requiresAuth } = require("express-openid-connect");
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Express Demo",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

router.get("/secured", requiresAuth(), async (req, res) => {
  let data = {};

  try {
    const apiResponse = await axios.get("http://localhost:5000/public");
    data = apiResponse.data;
  } catch (error) {}

  res.render("secured", {
    title: "Secure Page",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
    data,
  });
});

module.exports = router;
