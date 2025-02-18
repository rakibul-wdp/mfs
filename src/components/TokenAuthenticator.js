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
        if (tokenType === "magic_links") {
          stytch.magicLinks.authenticate(token, {
            session_duration_minutes: 60,
          });
        } else if (tokenType === "oauth") {
          stytch.oauth.authenticate(token, {
            session_duration_minutes: 60,
          });
        }
      }
    }
  }, [stytch, user]);
  return children;
};

export default TokenAuthenticator;
