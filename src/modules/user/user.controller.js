import { Message } from "../../../database/models/message.model.js";

export const user = (req, res) => {
  res.render("user.ejs", { userId: req.params.id, session: req.session });
};

export const sendMsg = async (req, res) => {
  req.body.user = req.params.id;
  await Message.insertMany(req.body);
  res.redirect("/user/" + req.params.id);
};

export const logOut = async (req, res) => {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
};
