const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const config = require('./config/db')
const account = require('./routes/account')
const Product = require('./models/product')

const app = express()

const port = 3000



app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log(`connect to DB`)
})

mongoose.connection.on('error', (err) => {
    console.log(`not connect to DB` + err)
})

app.get('/', (req, res) => {
    res.send('Main Page Site')
})

app.use('/account', account)

app.post('/api/post/getAllProduct', (req, res)=> {
    console.log('connection');
    mongoose.connect(config.db, { useNewUrlParser: true }, function(err){
        if(err) throw err;
        Product.find({},[],{sort: {id: -1}},(err, doc)=> {
            if(err) throw err;
            console.log('result is ',doc);
        return res.status(200).json({
            status: 'success',
            data: doc
               })
         })  
    })
})



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// })

app.listen(port , () => {
    console.log("Сервер был запущен по порту"+port);
    
})



