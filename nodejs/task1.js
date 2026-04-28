const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }
    const date = new Date();
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    fs.appendFile("usertrack.txt", `${date} ${myURL.pathname} : New Request record\n`, (err) => {
        if (err) console.log(err);
    });

    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, "index.html");
            break;

        case "/about":
            filePath = path.join(__dirname, "about.html");
            break;

        case "/contact":
            filePath = path.join(__dirname, "contact.html");
            break;

        case "/services":
            filePath = path.join(__dirname, "services.html");
            break;

        default:
            filePath = path.join(__dirname, "404.html");
    }

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    }); 

}).listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
