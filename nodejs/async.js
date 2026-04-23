/*const fs=require('fs');
fs.writeFile("newText.txt","Hello Section fc",(err) =>{
    if(err){console.log(err);
    }
    else{
    console.log("file created successfully");
    }

});*/
//write file can create a new file
//read file cannot create a new file


const fs=require('fs');
fs.readFile("newText.txt","utf8",(err) =>{
    if(err){console.log(err);
    }
    else{
    console.log("file created successfully");
    }

});
