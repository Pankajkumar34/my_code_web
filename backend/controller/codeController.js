const codeFileSchema=require('../model/codeFileSchema')
const errorResposne = require('../utils/helper')

module.exports={
    insertCode:async(req,res,next)=>{
try {
    const {userCode,zipFilePath,userName,discripation,publishType}=req.body
    const createdData=await codeFileSchema.create({
        userCode:userCode || "",
        zipFilePath:zipFilePath || "",
        userName:userName || "",
        discripation:discripation || "",
        publishType:publishType || ""

    })
    return errorResposne.success(res,200,"Uploaded successfully",body={createdData})
} catch (error) {
    return errorResposne.errorResposne(res,500,error.message,body={})
}
    }
}