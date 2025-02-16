import { StytchUIClient, Products } from "@stytch/vanilla-js";

// Initialize Stytch client
const stytch = new StytchUIClient(
  "public-token-test-99433c62-aba7-4ae3-b04e-32c9f4f9e9aa"
);

// Configuration for email magic links
const config = {
  emailMagicLinksOptions: {
    loginExpirationMinutes: 30,
    loginRedirectURL: "http://localhost:3000/authenticate",
    signupExpirationMinutes: 30,
    signupRedirectURL: "http://localhost:3000/authenticate",
  },
  products: [Products.emailMagicLinks],
};

// Custom styles for the login UI
const styles = {
  fontFamily: '"Helvetica New", Helvetica, sans-serif',
};

// Mount the Stytch login UI
stytch.mountLogin({ elementId: "#stytch-login-ui", styles, config });
