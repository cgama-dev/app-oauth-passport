const moongose =  require('mongoose')

const UserSchema = new moongose.Schema({
    username:{
        type: String
    },
    googleId:{
        type: String
    },
    thumbnail:{
        type: String
    }
})

const UserModel = moongose.model('user', UserSchema)

module.exports = UserModel