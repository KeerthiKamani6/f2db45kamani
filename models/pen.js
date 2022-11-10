const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({ 
    width: Number, 
    color: String, 
    style: String
  
}) 
 
module.exports = mongoose.model("Pen", 
penSchema)