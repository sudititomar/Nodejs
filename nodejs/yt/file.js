const fs = require("fs");

//Synchronous call 

fs.writeFileSync("./text.txt", "Hey There"); /* if we change
 this text and run the file, it will overwrite */