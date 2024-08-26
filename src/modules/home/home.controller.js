export const home = (req, res) => {
  res.render("home.ejs", { session: req.session });
};
