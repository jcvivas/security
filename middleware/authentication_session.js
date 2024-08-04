 /* Autenticación */

 var authenticateSession = (req, res, next) => {
    if(req.session.loggedin) {
        return next()
    } else{
        return res.redirect("/")
    }
}

var authenticateUserSession = (req, res, next) => {
    if(req.session.loggedin && process.env.USER_TOKEN.includes(req.session.role)) {
        return next()
    }
}

module.exports = {authenticateSession, authenticateUserSession};