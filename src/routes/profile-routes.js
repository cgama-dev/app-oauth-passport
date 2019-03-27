const { isAutheticate } = require('./../middlewares/auth-middleware')

const router = require('express').Router()

router.get('/', isAutheticate, (req, res) => {
    res.render('profile', { user: req.user });
})

module.exports = router