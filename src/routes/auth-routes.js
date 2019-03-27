const router = require('express').Router()
const passport = require('passport')

// auth login
router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
    res.send('logout com passport')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/google/callback', passport.authenticate('google'), (req, res)=>{
    res.send(' you reached the callback URI')
})

module.exports = router