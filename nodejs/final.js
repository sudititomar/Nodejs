const http= require("http");
const fs=require("fs");
const url= require("url");
const Serv = http.createServer((req,res) => 
{
    const da = new Date().toISOString();
    fs.appendFile("log.txt",`${da} and ${url.path}: New request recieved`);
    switch(url.pathname)
    {
        case '/':
            res.end("Welcome to home page");
            break;
        case "/about":
            res.end("This is about page");
            break;
        case "/contact":
            res.end("This is the contact page");
            break;
        default:
            res.end("404 page not found");
    }
});

Serv.listen(8000,'localhost',(err) =>{
    if(err) console.log(err)
        console.log("Server is listening on http://localhost:8000");

});
