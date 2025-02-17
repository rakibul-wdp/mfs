import jwt from "jsonwebtoken";

export const generateUnitJWT = (stytchUserId) => {
  const payload = {
    sub: stytchUserId, // Stytch user ID
    iat: Math.floor(Date.now() / 1000), // Issued at time
    exp: Math.floor(Date.now() / 1000) + 3600, // Expiration time (1 hour)
  };

  const secret = process.env.REACT_APP_JWT_SECRET; // Replace with your JWT secret
  return jwt.sign(payload, secret);
};
