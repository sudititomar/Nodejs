const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/my_Db")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));

  const newschema=new mongoose.Schema({
    First_name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Contact:{
        type:String,
        required:true}
    },
    {timestamp:true})

    const model=mongoose.model('User',newschema);

    app.post('/user',async(req,res)=>{
       
        const user = await User.create(req.body);
        res.json(user);

    })

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
