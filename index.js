const express=require('express');

const bodyParser= require("body-parser");
const CONSTANTS =require('./config/constant');
const loginRouter=require('./routes/login');
const registerRouter=require("./routes/register")
const app=express();

app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);


// app.get("/",(req,res)=>{
//     res.send("yes")

// })

// app.post("/submit",(req,res)=>{
//     res.send("post")
// })


app.listen(CONSTANTS.PORT,()=>{
    console.log("port is working")
})