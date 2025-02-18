import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import React, { useEffect, useState } from "react";
import UnitApp from "./UnitApp";

const Profile = () => {
  const stytch = useStytch();
  const { user } = useStytchUser();
  const { session } = useStytchSession();
  const [jwtToken, setJwtToken] = useState(null);

  function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null; // Return null if the cookie is not found
  }

  useEffect(() => {
    const token = getCookie("stytch_session_jwt");
    setJwtToken(token);
    console.log("JWT Token:", token);
  }, []); // Runs only on mount

  return (
    <div className="card">
      <h1>Profile</h1>
      <h2>User object</h2>
      <pre className="code-block">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>

      <h2>Session object</h2>
      <pre className="code-block">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <p>
        You are logged in, and a Session has been created. The SDK stores the
        Session as a token and a JWT in the browser cookies as{" "}
        <span className="code">stytch_session</span> and{" "}
        <span className="code">stytch_session_jwt</span> respectively.
      </p>
      <button className="primary" onClick={() => stytch.session.revoke()}>
        Log out
      </button>

      <h2>Unit White-Label App</h2>
      {session && <UnitApp jwtToken={session} />}

      <h2>Stored JWT Token</h2>
      <pre className="code-block">
        <code>{jwtToken || "No token found"}</code>
      </pre>
    </div>
  );
};

export default Profile;
