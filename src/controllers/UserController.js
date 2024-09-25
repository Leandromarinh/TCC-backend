require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");

async function getUser(req, res) {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

  res.status(200).json({ user });
}

async function updateUser(req, res) {
  const id = req.params.id;
  const { name, email, period } = req.body;

  try {
    if (email) {
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser._id.toString() !== id) {
        return res
          .status(400)
          .json({ message: "Este e-mail já está em uso por outro usuário" });
      }
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        period,
      },
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
}

async function updatePassword(req, res) {
  const id = req.params.id;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha atual incorreta" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Senha atualizada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar senha", error });
  }
}

module.exports = { getUser, updateUser, updatePassword };
