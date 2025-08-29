// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   const token =
//     req.cookies.token ||
//     (req.headers.authorization && req.headers.authorization.split(" ")[1]);
//   if (!token)
//     return res.status(401).json({ message: "No token, authorization denied" });
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };











const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // 1. Get token from cookie or authorization header
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // 2. Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // --- THIS IS THE FIX ---
    // 3. Check for the NEW token structure first, then fall back to the OLD one.
    // This makes your server compatible with both token types.
    if (decoded.user && decoded.user.id) {
      // If the token has the { user: { id: '...' } } structure, use it
      req.user = decoded.user;
    } else if (decoded.id) {
      // Fallback for old tokens with the { id: '...' } structure
      req.user = { id: decoded.id };
    } else {
      // If neither structure is found, the token is invalid
      return res.status(401).json({ message: "Token is not valid" });
    }
    
    next(); // Proceed to the next route handler
  } catch (err) {
    res.status(401).json({ message: "Token verification failed" });
  }
};