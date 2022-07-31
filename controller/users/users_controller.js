const bcrypt = require("bcrypt");
const userModel = require("../../models/users/users");
const userValidators = require("../validators/users");

const controller = {
  showSignUp: (req, res) => {
    res.render("pages/Signup");
  },

  signUp: async (req, res) => {
    //validations
    const validateUser = userValidators.createUser.validate(req.body);

    if (validateUser.error) {
      res.send(error);
      res.redirect("pages/Signup");
      return;
    }

    const validatedUser = validateUser.value;

    //Joi-password would have probably validated the password and the confirm password

    if (validateUsers.password !== validateUsers.confirmPassword) {
      res.send(
        "Password and confirm password does not match. Please try again"
      );
      res.redirect("pages/Signup");
      return;
    }

    //hash password
    const hash = await bcrypt.hash(validateUser.password, 5);

    try {
      await userModel.create({
        username: validatedUser.username,
        password: validatedUser.password,
        hash: hash,
      });
    } catch (err) {
      console.log(err);
      res.send("Authentcation failed");
      res.redirect("pages/Signup");
      return;
    }

    //redirect to Sign In page
    res.redirect("pages/Signin");
  },

  login: async (req, res) => {
    //validations
    const validatedResults = req.body;

    let user = null;

    try {
      //find username in DB to to match the username that was inputted
      user = await userModel.findOne({ username: validatedResults.username });
    } catch (err) {
      console.log(err);
      res.send("failed to get username from the DB");
      res.redirect("/Signin");
      return;
    }

    const passwordinDB = await bcrypt.compare(
      validatedResults.password,
      user.hash
    );

    //throw out an error if password does not match
    if (!pwMatches) {
      res.send("password is incorrect");
      return;
    }

    //regenerate the session to prevent session hijacking
    req.session.renegenerate(function (err) {
      if (err) {
        console.log(err);
        res.send("error in regenerating session");
        return;
      }

      // store username in session
      req.session.user = user.username;

      //redirect the session to authenticated page
      //for login users and save the page as well
      req.session.save(function (err) {
        if (err) {
          //error will send the user to the Sign in page again
          res.send("session cannot be saved");
          res.redirect("/Signin");
          return;
        }

        res.redirect("/home");
      });
    });
  },

  logout: async(req, res) => {
    res.session.destroy(null);
    res.clearCookie(this.cookie, {path: '/'})
    req.logout()
    res.redirect('/')
  }
};

module.exports = controller;
