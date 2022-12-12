import express from 'express'
import contadorRoutes from './routes/contador.routes.js'

const app = express()

app.use(express.json())

app.use(contadorRoutes)

console.log(process.env.PORT)

app.listen(process.env.PORT)
