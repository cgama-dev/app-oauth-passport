const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const { google } = require('./keys')

//options config the google start
const configGoogleStrategy = new GoogleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret
})

passport.use(configGoogleStrategy, () => {
    // passport callback function
})