import { users } from "../data/user.js";

const checkAccount = (req, res, next) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      message: "Missing required key",
    });
  }

  const exitstingUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!exitstingUser) {
    return res.status(400).json({
      message: "Email or password is not correct",
    });
  }

  next();
};

export default checkAccount;
