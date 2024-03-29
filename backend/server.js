require('dotenv').config()


const express = require('express')
const mongoose =require('mongoose')
const forumRoutes = require('./routes/forum')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})




app.use('/api/forums',forumRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on 4005')
        })
    })
    .catch((error)=>{
        console.log(error)
    })
// listen for requests

