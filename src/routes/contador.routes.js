import {Router} from 'express'
import {getContador, incrementarContador, decrementarContador, createContador, deleteContador, reiniciarContador} from '../controllers/contador.controller.js'
 
const router = Router()

router.get('/contador', getContador)

router.post('/contador', createContador)

router.get('/contador/incrementar', incrementarContador)

router.get('/contador/decrementar', decrementarContador)

router.get('/contador/reiniciar', reiniciarContador)

router.delete('/contador', deleteContador)

export default router