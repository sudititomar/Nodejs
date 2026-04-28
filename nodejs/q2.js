const fs = require('fs');

fs.readFile("newText.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const lines = data.split('\n');

        for (let line of lines) {
            console.log(line);
        }
    }
});
