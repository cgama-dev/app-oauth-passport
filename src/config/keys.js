module.exports = {
    google: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    },
    mongodb:{
        uri:`mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWD}@ds125486.mlab.com:25486/${process.env.MONGO_DB_NAME}`
    },
    session:{
        cookieKey: 'cgamdev1234567'
    }
}