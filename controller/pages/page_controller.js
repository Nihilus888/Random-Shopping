const controller = {

    showHome: (req, res) => {
        res.render('pages/home')
    },

    showSignIn: (req, res) => {
        res.render('pages/signin')
    },

    showSignUp: (req, res) => {
        res.render('pages/signup')
    }

}

module.exports = controller