const router = require('express').Router()
const passport = require('passport')

//google auth
const googleAuth = passport.authenticate('google', {
    scope: ['profile']
})

// screen auth login
router.get('/login', (req, res) => {
    res.render('login', {user:req.user})
})


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

//handle google
router.get('/google', googleAuth)

//handle google callback
router.get('/google/callback', googleAuth, (req, res) => {

    res.redirect('/profile/')
})

module.exports = router