const http= require("http");
const Serv = http.createServer((req,res) => 
{
    console.log(req);
    res.end("My Second Server");
});
Serv.listen(4000,'localhost',(err) =>{
    if(err) console.log(err)
        console.log("Server is listening on http://localhost:4000");

});
