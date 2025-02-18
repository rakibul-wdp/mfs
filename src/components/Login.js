import React from "react";
import { StytchLogin } from "@stytch/react";
import { Products } from "@stytch/vanilla-js";

const Login = () => {
  const styles = {
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#4A37BE",
        borderColor: "#4A37BE",
      },
    },
  };
  const config = {
    products: [Products.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL: "http://localhost:3000/authenticate",
      loginExpirationMinutes: 60,
      signupRedirectURL: "http://localhost:3000/authenticate",
      signupExpirationMinutes: 60,
    },
  };

  return <StytchLogin config={config} styles={styles} />;
};

export default Login;
