/* Autorización */

var authorizationSession = (req, res, next) => { {
    if(process.env.ALL_GRANTED.includes(req.session.role)) {
        return next()
    } 
    if(process.env.USER_TOKEN.includes(req.session.role)) {
        return res.redirect("/token")
    }
    return res.redirect("/")
    }
}

var authorizationUserSession = (req, res, next) => { {
    if(process.env.USER_TOKEN.includes(req.session.role)) {
        return next()
    }
    return res.redirect("/")
    }
}

module.exports = {authorizationSession, authorizationUserSession};