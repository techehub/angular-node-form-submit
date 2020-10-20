var express = require ("express")
var app = express ()
var cors = require('cors')
app.use(cors())
var  users= require ('./userController')

app.use ('/service',users)


app.listen (8080)