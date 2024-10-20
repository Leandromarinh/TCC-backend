require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const subject = require("../subjects");

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
    subject,
    myGrid: [{ period: 1, subjects: [] }],
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

  if (!user) return res.status(404).json({ msg: "Email não encontrado!" });

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) return res.status(422).json({ msg: "Senha inválida!" });

  try {
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret,
      { expiresIn: "2h" }
    );

    const refresh_token = jwt.sign(
      {
        id: user._id,
      },
      refreshTokenSecret,
      { expiresIn: "48h" }
    );

    const tokenExpirationTime = Math.floor(Date.now() / 1000) + 7200;

    // const userInfo = await User.findById(user._id, "-password");

    res.status(200).json({
      id: user._id,
      // user: userInfo,
      token,
      refresh_token,
      token_expiry_time: tokenExpirationTime,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error no Servidor" });
  }
}

const refreshToken = (req, res) => {
  const refresh_token = req.body.refresh_token;

  const tokenExpirationTime = Math.floor(Date.now() / 1000) + 7200;

  jwt.verify(refresh_token, refreshTokenSecret, function (error, decode) {
    if (error) res.status(400).json({ error });
    else {
      const token = jwt.sign(
        {
          id: decode._id,
        },
        secret,
        { expiresIn: "2h" }
      );
      const newRefreshToken = jwt.sign(
        {
          id: decode._id,
        },
        refreshTokenSecret,
        { expiresIn: "48h" }
      );
      res.status(200).json({
        msg: "Token refreshed com sucesso!",
        token,
        refresh_token: newRefreshToken,
        token_expiry_time: tokenExpirationTime,
      });
    }
  });
};

module.exports = { register, login, refreshToken };
