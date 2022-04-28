const express= require("express");
require("./db/conn");
const Student =require("./models/Student");
const Teacher =require("./models/Teacher");
const  app = express();
const cors = require('cors');
const port = process.env.Port || 8000
app.use(express.json());
app.use(cors());


app.get("/students", async(req,res)=>{
  try{

    const StudentData=  await Student.find();
      res.send(StudentData);
  }catch(error)
  {
      console.log(error);
    res.send(error);
  }


})
app.put("/students/:id", async(req,res)=>{
    try{
  
    
const _reg=req.params.id;
console.log(_reg)
      
    const StudentData  = await Student.findByIdAndUpdate(_reg,req.body);

        res.send(StudentData);
    }catch(error)
    {
        console.log(error);
      res.send(error);
    }
  
  
  })
  app.delete("/students/:id", async(req,res)=>{
    try{
  
    

      
    const StudentData  = await Student. findByIdAndDelete(req.params.id);

        res.send(StudentData);
    }catch(error)
    {
        console.log(error);
      res.send(error);
    }
  
  
  })
app.post("/students",(req, res)=>{
       
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch(e=>{
        console.log("error",e)
        res.status(404).send(e)
    }
        );
   
})
app.post("/teachers",(req, res)=>{
       
  const user=new Teacher(req.body);
  user.save().then(()=>{
      res.status(201).send(user);
  }).catch(e=>{
      console.log("error",e)
      res.status(404).send(e)
  }
      );
 
})

app.get("/teachers", async(req,res)=>{
  try{

    const teacherData=  await Teacher.find();
      res.send(teacherData);
  }catch(error)
  {
      console.log(error);
    res.send(error);
  }


})
app.put("/teachers/:id", async(req,res)=>{
  try{

  
const _reg=req.params.id;
console.log(_reg)
    
  const teacherData  = await Teacher.findByIdAndUpdate(_reg,req.body);

      res.send(teacherData);
  }catch(error)
  {
      console.log(error);
    res.send(error);
  }


})
app.delete("/teachers/:id", async(req,res)=>{
  try{

  const teacherData  = await Teacher. findByIdAndDelete(req.params.id);

      res.send(teacherData);
  }catch(error)
  {
      console.log(error);
    res.send(error);
  }


})
app.listen(port,'0.0.0.0' ,()=>{
    console.log("conecction"+port);
})