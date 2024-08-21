const express =require('express') 
const mysql = require('mysql')
const cors=require('cors')
const path= require('path')
 
const app=express()

app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())

const port=5000

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"portofolio"
})

app.post('/add_form',(req,res)=>{
    sql="INSERT INTO form (`name`,`email`,`message`) VALUES (?, ?, ?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.message
    ]
    db.query(sql,values,(err,result)=>{
        if(err) return res.json({message:'Something unexpected has occured' +err})
            return res.json({success:"Form added successfully"})
    })

})
 app.listen(port,()=>{
    console.log('listening')
 })
 
