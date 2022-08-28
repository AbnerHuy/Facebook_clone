const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    let tmp = req.header("Authorization");
    const token = tmp ? tmp.slice(7, tmp.length) : "";
    if (!token) {
      return res.status(400).json({
        message: "Invalid Authenticated",
      });
    }
    jwt.verify(token, process.env.TOKEN.SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "Invalid Authenticated",
        });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
