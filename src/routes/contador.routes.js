import {Router} from 'express'
import {getContador, incrementarContador, decrementarContador, createContador, deleteContador} from '../controllers/contador.controller.js'
 
const router = Router()

router.get('/contador', getContador)

router.post('/contador', createContador)

router.put('/contador/incrementar', incrementarContador)

router.put('/contador/decrementar', decrementarContador)

router.delete('/contador', deleteContador)

export default router