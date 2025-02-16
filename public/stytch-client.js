const stytch = new StytchUIClient(process.env.STYTCH_PUBLIC_TOKEN);

const config = {
  emailMagicLinksOptions: {
    loginExpirationMinutes: 30,
    loginRedirectURL: "http://localhost:3000/authenticate",
    signupExpirationMinutes: 30,
    signupRedirectURL: "http://localhost:3000/authenticate",
  },
  products: [stytch.Products.emailMagicLinks],
};

stytch.mountLogin({ elementId: "#stytch-login-ui", config });
