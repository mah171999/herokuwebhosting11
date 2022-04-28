const mongoose = require("mongoose");
const validator =require("validator");



const teachersSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    EmployeeNumber:{
        type:String,
        required:true,
        unique:true
    }
})
const Teacher = new mongoose.model('teacher',teachersSchema);
module.exports=Teacher;