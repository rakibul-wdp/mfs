// import jwt from "jsonwebtoken";

// export const generateUnitJWT = (stytchUserId) => {
//   const payload = {
//     sub: stytchUserId,
//     iat: Math.floor(Date.now() / 1000),
//     exp: Math.floor(Date.now() / 1000) + 3600,
//   };

//   const secret = process.env.REACT_APP_JWT_SECRET;
//   return jwt.sign(payload, secret);
// };
