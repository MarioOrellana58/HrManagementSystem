import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '123',
    database:'employeesystem'
})

app.post('/create', (request, response) => {
    const employee = request.body;

    db.query("INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
                [   employee.name,
                    employee.age,
                    employee.country,
                    employee.position,
                    employee.wage
                ],
                (error, result) => {
                    if (error) {                        
                        console.log(error)                           
                        response.status(500)
                        response.send(error.sqlMessage)
                    } else {
                        console.log(result)
                        response.send(result)
                    }
                }
    )
})

app.listen(3001, () => {
    console.log("server running")
})