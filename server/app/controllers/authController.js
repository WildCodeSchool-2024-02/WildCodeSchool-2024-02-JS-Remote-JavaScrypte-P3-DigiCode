const argon2 = require("argon2");
const tables = require("../../database/tables");

const { encodeJWT, decodeJWT } = require("../helpers/jwtHelper");

const login = async (req, res) => {
  const genericError = "Email and password do not match";

  const { email, password } = req.body;
  const [user] = await tables.user.searchByEmail(email);

  if (!user) {
    return res.status(404).json({
      message: genericError,
    });
  }

  const verified = await argon2.verify(user.password, password);

  if (!verified) {
    return res.status(404).json({
      message: genericError,
    });
  }

  delete user.password;

  const token = await encodeJWT(user);
  return res
    .cookie("auth_token", token, { httpOnly: true, secure: false })
    .json({ user, token });
};

const logout = (req, res) => {
  res.clearCookie("auth").sendStatus(200);
};

const checkAuth = async (req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(403).json(null);
  }

  try {
    const validToken = await decodeJWT(token);

    return res
      .status(200)
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 360000,
      })
      .json({
        user: validToken,
      });
  } catch (err) {
    return console.error(err);
  }
};

module.exports = { login, logout, checkAuth };
