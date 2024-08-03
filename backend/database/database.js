const mongoose = require("mongoose");
const DB_connect = () => {
  mongoose.connect("mongodb://localhost:27017/mycode").then((res) => {
    if (!res) {
      console.log("databse not connected");
    }
    console.log("databse  connected");
  });
};
module.exports = DB_connect;
