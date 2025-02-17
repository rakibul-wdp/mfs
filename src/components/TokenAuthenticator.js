import { useStytch, useStytchUser } from "@stytch/react";
import { useEffect } from "react";

const TokenAuthenticator = ({ children }) => {
  const stytch = useStytch();
  const { user } = useStytchUser();

  useEffect(() => {
    if (stytch && !user) {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get("token");
      const tokenType = queryParams.get("stytch_token_type");

      if (token && tokenType) {
        const authenticate = async () => {
          try {
            let response;
            if (tokenType === "magic_links") {
              response = await stytch.magicLinks.authenticate(token, {
                session_duration_minutes: 60,
              });
            } else if (tokenType === "oauth") {
              response = await stytch.oauth.authenticate(token, {
                session_duration_minutes: 60,
              });
            }

            // Generate JWT for Unit after successful authentication
            if (response && response.user_id) {
              // const jwtToken = generateUnitJWT(response.user_id);
              const jwtToken = "";
              localStorage.setItem("unitJwtToken", jwtToken);
            }
          } catch (error) {
            console.error("Authentication failed:", error);
          }
        };

        authenticate();
      }
    }
  }, [stytch, user]);

  return children;
};

export default TokenAuthenticator;
