const mongoose = require('mongoose')
const { mongodb } = require('./../config/keys')

const MongoDB = (() => {

    const connect = () => {
        mongoose.connect(mongodb.uri, { useNewUrlParser: true }, () => console.log(`Connectado com banco :: ${new Date()}`))
    }

    return {
        connect
    }

})



module.exports = MongoDB()