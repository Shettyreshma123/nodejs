const express=require("express");
const app=express();
const PORT=4000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/backend");
 const con =mongoose.connection;
 con.on("open" ,()=>{
	console.log("database connected successfully");
 }); 
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))
 require("./routes")(app);

app.listen(PORT,()=>{
console.log(`server listing on port ${PORT}`);
})



