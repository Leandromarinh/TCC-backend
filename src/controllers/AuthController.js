require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;
const refreshTokenSecret = process.env.REFRESH_SECRET;

async function register(req, res) {
  const { name, email, password, period } = req.body;

  const UserExists = await User.findOne({ email: email });

  if (UserExists) return res.status(422).json({ msg: "Email já cadastrado" });

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash,
    period,
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error no Servidor" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) return res.status(422).json({ msg: "Senha inválida!" });

  try {
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret,
      { expiresIn: "30s" }
    );

    const refresh_token = jwt.sign(
      {
        id: user._id,
      },
      refreshTokenSecret,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      msg: "Autenticação realizada com sucesso!",
      token,
      refresh_token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error no Servidor" });
  }
}

const refreshToken = (req, res) => {
  const refresh_token = req.body.refresh_token;

  jwt.verify(refresh_token, refreshTokenSecret, function (error, decode) {
    if (error) res.status(400).json({ error });
    else {
      const token = jwt.sign(
        {
          id: decode._id,
        },
        secret,
        { expiresIn: "30s" }
      );
      res.status(200).json({
        msg: "Token refreshed com sucesso!",
        token,
        refresh_token,
      });
    }
  });
};

module.exports = { register, login, refreshToken };
