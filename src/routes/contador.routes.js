import {Router} from 'express'
import {getContador, incrementarContador, decrementarContador, createContador, deleteContador} from '../controllers/contador.controller.js'
 
const router = Router()

router.get('/contador', getContador)

router.post('/contador', createContador)

router.get('/contador/incrementar', incrementarContador)

router.get('/contador/decrementar', decrementarContador)

router.delete('/contador', deleteContador)

export default router