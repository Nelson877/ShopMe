const jwt = require("jsonwebtoken");

const generteAuthToken = (user) => {
  const jwtScretkey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    jwtScretkey
  );
  return token;
};

module.exports = generteAuthToken;
