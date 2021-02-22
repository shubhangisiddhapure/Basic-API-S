var express = require('express')
const  app = express()
const user=require('./user.json')
const fs = require('fs')
const port =3001

app.use(express.json())
//get whole data
app.get('/get',(req,res)=>{
    console.log(user)
    res.send(user)
})
//push the data
app.post('/post',(req,res)=>{
    var add={
        "name":req.body.name,
        "age":req.body.age,
        "lastname":req.body.lastname
    }
    user.push(add)
    fs.writeFile('user.json',JSON.stringify(user),err=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log('posted..')
            res.send("data post")
        }
    })
})

app.listen(port,()=>{
    console.log('server started on port 3001')
})