const router = require('express').Router()

// auth login
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/logout', (req, res) => {
    res.send('logout com passport')
})
router.get('/google', (req, res) => {
    res.send('login com google passport')
})

module.exports = router