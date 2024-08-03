const mongoose = require("mongoose");

const codeFileSchema = new mongoose.Schema(
  {
    userCode: String,
    zipFilePath:String,
    userName: String,
    discripation: String,
    publishType:{
    type:String,
    default:"0"    // 0 ==> public    1 ===>private 
    }
  },
  { timestamps: true }
);

const CodeFile = mongoose.model("CodeFile", codeFileSchema);

module.exports = CodeFile;
