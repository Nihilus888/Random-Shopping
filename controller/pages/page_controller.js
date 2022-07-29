const controller = {

    showHome: (req, res) => {
        res.render('pages/home')
    },

    showSignIn: (req, res) => {
        res.render('pages/Signin')
    },

    showSignUp: (req, res) => {
        res.render('pages/SignUp')
    }

}

module.exports = controller