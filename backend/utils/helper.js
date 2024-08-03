const errorResposne=(res,code,msg,body)=>{
return res.status(code).json({success:"false",message:msg,body:body})
}
const success=(res,code,msg,body)=>{
    return res.status(code).json({success:"false",message:msg,body:body})
    }
module.exports ={errorResposne,success}