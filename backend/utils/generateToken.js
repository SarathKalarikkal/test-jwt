import jwt from 'jsonwebtoken';

// Access Token: short lifespan
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m', // Short-lived
  });
};

// Refresh Token: longer lifespan
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d', // Can be stored in HttpOnly cookie or DB
  });
};

export default {generateAccessToken,generateRefreshToken}