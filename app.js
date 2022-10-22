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

// create new user
app.post("/user/created",(req,res)=>{

  const {name,birthYear,gander} = req.body;
  const id = randomUUID();
  const user = {
    id: id.slice(1,7),
    name,
    birthYear,
    gander
  };

  users.push(user);
  
  fs.writeFile('./database/data.json',JSON.stringify(users),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Product created with success!...")
    }    
  });

  res.json({message:"User created with success!",user:name})

})

//view all users
app.get("/users",(req,res)=>{
  res.json(users); 
})

// view a user using reference by parametre {:id}
app.get("/users/:id",(req,res)=>{

  const {id} = req.params;
  const user = data.find(user => user.id == id);

res.json(user)
})

// update data of user
app.put("/user/update/:id",(req,res)=>{

  const {id} = req.params;
  const {name,birthYear,age}= req.body;
  const userId =  users.findIndex(user => user.id == id);
  users[userId] = {
  ...users[userId],
  name,
  birthYear,
  age
  }

  fs.writeFile('./database/data.json',JSON.stringify(users),(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Update with success!')
    }
  })
  
  
  res.json({message:"User updated with success"})
})

// Delete user
app.delete('/user/delete/:id',(req,res)=>{

  const {id} = req.params;

 
  const userIndex = users.findIndex(user => user.id == id);
   users.splice(userIndex,1);
   
   fs.writeFile('./database/data.json',JSON.stringify(users),(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Update with success!')
    }
  })
  
})



app.listen(PORT,()=>console.log('SERVER RUNNING...! PORT:',PORT))