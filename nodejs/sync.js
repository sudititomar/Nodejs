
/*const fs=require('fs');
const fd=fs.openSync("./text.txt","w+");
fs.writeSync(fd,"Hello World ");
const buffer=Buffer.alloc(50);

const data=fs.readSync(fd,buffer,0,buffer.length,0);
console.log(buffer.toString("utf8",0,data));*/

const fs=require('fs');
fs.writeFileSync("text.txt","Helllo mam\n",{flag:"w"});
console.log(fs.readFileSync("text.txt","utf8"));
const fa=fs.appendFileSync("text.txt","Hello");
fs.renameSync("text.txt", "newText.txt");
fs.cpSync("text.txt", "copy.txt");
fs.unlinkSync("text.txt");
