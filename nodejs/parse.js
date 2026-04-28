const url=require('url');
const http=require('http');

let address='https://www.notion.so:3000/Core-Built-in-2e124644d9ed80a990a6d576c29fa513';
//const myURL= url.parse(address,true);
const myURL = new URL(address);
//const myURL = new URL(address);
//console.log(myURL);
//console.log(myURL,pathname);
//console.log(myURL,search);
//console.log(myURL,hostname);
//console.log(myULR,path);

console.log(myURL);