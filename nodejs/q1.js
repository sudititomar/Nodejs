const fs = require('fs');

fs.readFile("newText.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        for (let ch of data) {
            console.log(ch);
        }
    }
});
