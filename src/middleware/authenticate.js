require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ msg: "Token expirado!" });
    } else res.status(400).json({ msg: "Token inválido!" });
  }
};

module.exports = authenticate;
