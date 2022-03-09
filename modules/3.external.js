const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Welcome to Third party modules")
})

app.get("/user", function(req, res){
    res.send("Welcome to user endpoint")
})

app.get("/employee", (req, res) =>{
    res.send("Welcome to Employee endpoint")
})

const PORT =3001

app.listen(PORT, () =>{
    console.log(`Server listening at PORT ${PORT}`)
})

