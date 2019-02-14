const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");
const User = require("./models/user");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post("/api/signin", requireSignin, Authentication.signin);
  app.post("/api/signup", Authentication.signup);

  app.get("/api/users", async (req, res) => {
    const users = await User.find({});
    res.send(users);
  });

  app.get("/api/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
  });
};
