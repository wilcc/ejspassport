const express = require('express')
const app = express()
const morgan = require('morgan')
const router = require('./routes/route')
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 3600
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(morgan('dev'))



app.use('/',router)




app.listen(port,()=> console.log(`Listening to port ${port}`))
