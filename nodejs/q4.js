const fs = require('fs');

const stream = fs.createReadStream("newText.txt", {
    encoding: "utf8",
    highWaterMark: 16
});

stream.on("data", (chunk) => {
    console.log("CHUNK:", chunk);
});

stream.on("end", () => {
    console.log("Done reading file");
});

stream.on("error", (err) => {
    console.log(err);
});
