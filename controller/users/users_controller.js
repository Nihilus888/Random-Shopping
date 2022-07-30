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
};

module.exports = controller

