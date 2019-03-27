require('dotenv').config({ path: '.env' })

const express = require('express')
const path = require("path")
const app = express()
const homeRoutes = require('./routes/index')
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')
const mongoosedb = require('./database')
const passportSetup = require('./config/passport-setup')
const { session } = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

// set up view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// session
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [session.cookieKey]
}))

// initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// connect database
mongoosedb.connect()

// routes
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(3000, () => console.log('Server rodando na porta 3000'))