const express =require('express')
const route=express.Router()
const codeController=require('../controller/codeController')

route.post('/insert_code',codeController.insertCode)

module.exports =route