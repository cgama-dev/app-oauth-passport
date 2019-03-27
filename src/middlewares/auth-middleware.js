const AuthMiddleware = (() => {

    const isAutheticate = (req, res, next) => {
        if (!req.user) {
            return res.redirect('/auth/login')
        }
        next()
    }

    return {
        isAutheticate
    }

})

module.exports = AuthMiddleware()