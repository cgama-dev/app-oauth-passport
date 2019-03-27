const express = require('express')
const path = require("path")
const app = express()
const authRoutes = require('./routes/auth-routes')
const passportSetup =  require('./config/passport-setup')

// set up view engine
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home')
})

app.use('/auth', authRoutes)

app.listen(3000, () => console.log('Server rodando na porta 3000'))