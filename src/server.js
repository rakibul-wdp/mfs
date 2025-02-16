require("dotenv").config();
const express = require("express");
const stytch = require("stytch");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Initialize Stytch client
const stytchClient = new stytch.Client({
  project_id: process.env.STYTCH_PROJECT_ID,
  secret: process.env.STYTCH_SECRET,
  env: stytch.envs.test,
});

// Authenticate Stytch magic link
app.get("/authenticate", async (req, res) => {
  const token = req.query.token;
  try {
    const response = await stytchClient.magicLinks.authenticate(token);
    const stytchUserId = response.user_id;

    // Generate JWT for Unit
    const jwtToken = jwt.sign({ sub: stytchUserId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Redirect to home page with JWT token, theme, and language
    res.redirect(`/home?jwt=${jwtToken}&theme=light&language=en`);
  } catch (error) {
    console.error(error);
    res.status(400).send("Authentication failed");
  }
});

// Serve static files
app.use(express.static("public"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
