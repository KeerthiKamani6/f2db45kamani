const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({ 
    width: {
        type:Number, 
        required:true,
        min:0,
        max:30
    },
    color: {type: String,required: [true, 'color of the pen cannot be empty']}, 
    style: {type: String,required: [true, 'style of the cannot be empty']}  
}) 
 
module.exports = mongoose.model("Pen", penSchema)