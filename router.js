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
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIII");
    const users = await User.find({});
    console.log("users:", users);
    res.send(users);
  });
};
