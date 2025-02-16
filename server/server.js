const express = require("express");
const session = require("express-session");
const stytch = require("stytch");

// Initialize Express app
const app = express();
app.use(express.json());

// Configure session middleware
app.use(
  session({
    secret: "secret-test-9fkls3G2lHQZkleqgy8d2kf1l-FP3MNTiho=",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// Initialize Stytch client
const client = new stytch.Client({
  project_id: "project-test-ebe3e75a-b5bc-4d85-bfc5-b15b43aec055",
  secret: "secret-test-9fkls3G2lHQZkleqgy8d2kf1l-FP3MNTiho=",
  env: stytch.envs.test,
});

// Endpoint to create a user
app.post("/users", function (req, res) {
  const stytchUserId = req.body.userId;
  // TODO: Save stytchUserId with your user record in your app's storage
  res.send(`Created user with stytchUserId: ${stytchUserId}`);
});

// Endpoint to authenticate a user via magic link
app.get("/authenticate", function (req, res) {
  const token = req.query.token;
  client.magicLinks
    .authenticate(token)
    .then((response) => {
      req.session.authenticated = true;
      req.session.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
      res.redirect("/home");
    })
    .catch((error) => {
      console.log(error);
      res.send("There was an error authenticating the user.");
    });
});

// Home page (protected route)
app.get("/home", function (req, res) {
  if (req.session.authenticated) {
    res.send("Welcome to the home page!");
  } else {
    res.redirect("/");
  }
});

// Serve static files (frontend)
app.use(express.static("public"));

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
