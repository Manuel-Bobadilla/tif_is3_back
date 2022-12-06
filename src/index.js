import express from 'express'
import {pool} from './db.js'
import contadorRoutes from './routes/contador.routes.js'

const app = express()

app.get("/empleados", async (req,res) => {
    const result = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
})

app.use(express.json())

app.use(contadorRoutes)

app.listen(3000)

console.log('server en puerto 3000')