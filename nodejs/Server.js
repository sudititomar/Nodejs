const http= require("http");
const Serv = http.createServer((req,res) => 
{
    console.log(req);
    res.end("Welcome to server NODE JS");
});
Serv.listen(8000,'localhost',(err) =>{
    if(err) console.log(err)
        console.log("Server is listening on http://localhost:8000");

});