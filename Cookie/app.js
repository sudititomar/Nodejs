const express = require("express")
const app = express()
const cookieParser=require("cookie-parser")

app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie("Uname", "SecFC", {
        maxAge: 24 * 60 * 60 * 1000   ,
        httpOnly:true,
        secure:false
})
    res.send("Cookies setup successfully !!")
})

app.get('/getcookie', (req, res) => {
    const data=req.cookies.Uname
    if(data) res.send(data)
    else res.send("Cookies not found")
});

app.get('/deletecookie', (req, res) => {
    res.clearCookie("Uname")
    res.send("Cookie Deleted Successfully")
});
app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000")
})