import express from 'express'
import contadorRoutes from './routes/contador.routes.js'

const app = express()

app.use(express.json())

app.use(contadorRoutes)

app.listen(3000)

console.log('server en puerto 3000')