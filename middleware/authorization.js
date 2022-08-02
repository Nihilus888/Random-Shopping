const res = require("express/lib/response")

module.exports = {
    Authenticated: (req, res, next) => {

        //fail to login, redirect to sign in page
        if(!req.session.user) {
            res.redirect('/pages/Signin')
            return
        }

        //if successful, call on the next middleware
        next()
    },

    setAuthenticatedUser: (req, res, next) => {
        //initialise authenticated user and password
        res.locals.authenticatedUser = null
        res.locals.password = "some password"

        //if there is a session user, session user's value will be authenticated user's value
        if(req.session.user) {
            res.locals.authenticatedUser = req.session.user
        }

        //if successful, continue ons
        next()
    }
}