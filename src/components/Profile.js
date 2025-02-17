import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import React from "react";
import UnitApp from "./UnitApp";

const Profile = () => {
  const stytch = useStytch();
  const { user } = useStytchUser();
  const { session } = useStytchSession();

  // Retrieve the JWT token from localStorage
  const jwtToken = localStorage.getItem("unitJwtToken");

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

      {/* Embed the Unit White-Label App */}
      <h2>Unit White-Label App</h2>
      {/* {jwtToken && <UnitApp jwtToken={jwtToken} />} */}
    </div>
  );
};

export default Profile;
