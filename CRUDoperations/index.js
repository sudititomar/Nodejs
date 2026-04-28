const express=require('express');
const app=express();
const users =require('./Users.json')
app.use(express.urlencoded({Extender:"false"}))
app.get('/api/userdata',(req,res)=>{
    return res.json(users);
})
app.get('/user',(req,res)=>{
   

// return res.json(users);
const html=`
<ul>
${users.map((users)=>`<li>${users.name}</li>`).join(' ')}
</ul>
`
res.send(html);
})
app.get('/userdata/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    const userwise = users.find(user=> user.idNo==id)
     return res.json(userwise);
})

app.post('/userData',(req,res)=>{
    // return res.json({mes:"Pending"})


const data = req.body
console.log(data);
return res.json({mes:"done"})
})
app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000");
})



app.delete('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);

    const users= JSON.parse(fs.readFileSync('./users_400.json','utf-8'));

    const filteredUsers= users.filter(user=>user.id!=id);

    fs.writeFileSync('./users_400.json',JSON.stringify(filteredUsers,null,2));

    res.json({message:"User Deleted"});
});

    



