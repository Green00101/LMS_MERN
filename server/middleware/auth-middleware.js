const jwt = require("jsonwebtoken");

const verifyToken = (token, secretKey) => {
  return jwt.verify(token, secretKey);
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.state(401).json({
      success: false,
      message: "User is not authenticated",
    });
  }
  const token = authHeader.split(" ")[1];

  const payload = verifyTokern(token, "JWT_SECRET");
  req.user = payload;
  next();
};

module.exports = authenticate;
