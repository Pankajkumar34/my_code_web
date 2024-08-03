const express = require('express')
const app =express()
const cors = require('cors')
const DB_connect= require('./database/database')
const route = require('./routes')

// require('dotenv').config()
DB_connect()
const port=4325
app.use(cors())
app.use(express.json())
app.use('/',route)
app.get('*',async (req,res,next)=>{
try {
    res.send({message:"user online",status:200,success:true})
} catch (error) {
    next(error)
}
})




app.listen(port,()=>console.log("server running on "+`${port}`))