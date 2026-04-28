const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Home Page</h1>
    <a href="/about">About</a><br>
    <a href="/contact">Contact</a><br>
    <a href="/user">User</a><br>
    <a href="/search?name=Priyanshi">Search Example</a>
  `);
});

app.get("/user", (req, res) => {
  res.send(`
    <h1>User Page</h1>
    <a href="/about">About</a><br>
    <a href="/contact">Contact</a><br>
    <a href="/">Home</a>
  `);
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  if (!name) return res.send("No result found (please provide ?name=value)");
  console.log(req.query);
  res.send("Result is: " + name);
});

app.use((req, res) => {
  res.send("404 Page Not Found");
});

app.listen(5000,"localhost", (err) => {
  if(err) console.log(err);
  console.log("Server running at http://localhost:5000");
});