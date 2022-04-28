const mongoose = require("mongoose");
const validator =require("validator");



const studentsSchema  = new mongoose.Schema({
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
    RegistrationNumber:{
        type:String,
        required:true,
        unique:true
    }
})
const Student = new mongoose.model('Student',studentsSchema);
module.exports=Student;