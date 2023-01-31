const jwt = require("jsonwebtoken");
const { fn } = require("sequelize");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Не авторизован" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "У вас нет доступа" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      // res.status(401).json({ message: "Не авторизован" });
      const token = generateJwt(req.user.id, req.user.email, req.user.role);
      return res.json({ token });
    }
  };
};
fn("ADMIN");
