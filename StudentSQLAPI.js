const express = require("express")
const app = express()
const router = express.Router()
const sql = require('mssql')
const cors = require('cors')

const dbConfig ={
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'studentdb',
    options: {
        trustServerCertificate: true
    }
}

sql.connect(dbConfig, (err) => {
    if(err){
        throw err
    } else {
        console.log(`successfully connected to SQL Server DB`)
    }
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.get("/", (req, res) => {
    res.json("Welcome to Student API using SQL Server DB")
})

router.get("/students", (req, res) => {
    const request = new sql.Request()
    const selectQuery = "SELECT * FROM Student"
    request.query(selectQuery, (err, data) => {
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.get("/students/:id", (req, res) => {
    const studentId = req.params.id
    const request = new sql.Request()
    const selectQueryById = `SELECT * FROM Student WHERE _id=${studentId}`

    request.query(selectQueryById, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.post("/students", (req, res) => {
    const {name, email, city} = req.body

    const request = new sql.Request()
    const insertQuery = `INSERT INTO student (name, email, city) VALUES ('${name}', '${email}', '${city}')`

    request.query(insertQuery, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res) => {
    const studentId = req.params.id
    const {name, email, city} = req.body

    const request = new sql.Request()
    const updateQuery = `UPDATE student SET name ='${name}', email = '${email}', city='${city}'  WHERE _id=${studentId}`

    request.query(updateQuery, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/students/:id", (req, res) => {
    const studentId = req.params.id
    const request = new sql.Request()
    const deleteQuery = `DELETE FROM Student WHERE _id=${studentId}`

    request.query(deleteQuery, (err, data) =>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})
