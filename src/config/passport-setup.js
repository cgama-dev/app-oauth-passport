const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const { google } = require('./keys')

const callbackGoogleStrategy = (accessToken, refreshToken, profile, done) => {

    console.log('CallBack function passport')
    console.log(profile)
}

//options config the google start
const configGoogleStrategy = new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: google.clientID,
    clientSecret: google.clientSecret,
}, callbackGoogleStrategy)

passport.use(configGoogleStrategy)