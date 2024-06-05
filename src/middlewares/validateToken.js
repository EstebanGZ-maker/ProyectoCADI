import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js";

export const createAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, roles: user.roles, username: user.username },
    TOKEN_SECRET,
    { expiresIn: '1h' }
  );
  
};

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies;

  console.log(req.cookies)

    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (error, decoded ) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = decoded;
      next();
      console.log(decoded)
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}; 

  // Middleware para verificar el rol
export const requireRole = (roles) => (req, res, next) => {
  if (!req.user || !req.user.roles) {
    return res.status(401).json({ message: 'Access denied, insufficient permissions' });
  }

  const userRoles = req.user.roles;

  const authorized = roles.some(role => userRoles.includes(role));

  if (!authorized) {
    return res.status(401).json({ message: 'Access denied, insufficient permissions' });
  }

  next();
};
