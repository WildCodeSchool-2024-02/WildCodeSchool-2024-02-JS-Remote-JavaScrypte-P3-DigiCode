const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  if (req.body.confirmpassword) {
    delete req.body.confirmpassword;
  }

  const { password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);

    req.body.password = hashedPassword;
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = hashPassword;
