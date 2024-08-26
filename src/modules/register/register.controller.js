import { User } from "../../../database/models/user.model.js";
export const register = (req, res) => {
  res.render("register.ejs", { error: req.query.error, session:null });
};

export const handleRegister = async (req, res) => {
  let isUser = await User.findOne({ email: req.body.email });
  if (isUser) return res.redirect("/register?error=email already exists.");
  await User.insertMany(req.body);
  res.redirect("/login");
};
