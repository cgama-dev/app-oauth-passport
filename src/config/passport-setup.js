const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const { google, mongodb } = require('./keys')
const User = require('./../models/user.model')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {

        const user = await User.findById(id)

        if (!user) {
            return done(new Error("Usuário não encontrado"))
        }
        done(null, user)

    } catch (e) {
        done(e)
    }
})

const callbackGoogleStrategy = async (accessToken, refreshToken, profile, done) => {

    const { id, displayName, _json: { picture } } = profile


    let user = null

    user = await User.findOne({ googleId: id })

    if (!user) {
        user = await new User({ username: displayName, googleId: id, thumbnail: picture }).save()
    }

    done(null, user)
}

//options config the google start
const configGoogleStrategy = new GoogleStrategy({
    callbackURL: "/auth/google/callback",
    clientID: google.clientID,
    clientSecret: google.clientSecret,
}, callbackGoogleStrategy)


passport.use(configGoogleStrategy)