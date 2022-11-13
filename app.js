const express = require('express');
const { randomUUID } = require('crypto');
const fs = require("fs")
const app = express();
const PORT = 2000;
app.use(express.json())
let users = [];

fs.readFile("./database/data.json","utf-8",(err,data)=>{
  if(err){
      console.log(err)
  }else{
      users = JSON.parse(data);
  }
});

app.get("/users",(req,res)=>{
  res.json(users); 
})

app.get("/users/:id",(req,res)=>{
  const {id} = req.params;
  const user = users.find(user => user.id == id);
  res.json(user)
})

app.post("/users",(req,res)=>{
  const {name,birthYear,gander} = req.body;
  const id = randomUUID();
  const user = {
    id: id.slice(1,7),
    name,
    birthYear,
    gander
  };
  users.push(user);
  writeFile(users);
  res.json({message:"User created with success!",user:name})
})

app.put("/users/:id",(req,res)=>{
  const {id} = req.params;
  const {name,birthYear,age}= req.body;
  const userId =  users.findIndex(user => user.id == id);
  users[userId] = {
  ...users[userId],
  name,
  birthYear,
  age
  }
  writeFile(users);
  res.json({message:"User updated with success"})
})

app.delete('/users/:id',(req,res)=>{
  const {id} = req.params;
  const userIndex = users.findIndex(user => user.id == id);
  users.splice(userIndex,1);
  writeFile(users);
  res.json({message:"User deleted with success"})
})

function writeFile(users){
  fs.writeFile('./database/data.json',JSON.stringify(users),(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log('success!')
    }
  })
}
app.listen(PORT,()=>console.log('SERVER RUNNING...! PORT:',PORT))