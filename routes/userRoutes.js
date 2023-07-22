import express from 'express'
import { userControl } from '../controllers/index.js'

const router = express.Router()


router.get('/price/:user_id/:nombre_producto', userControl.getPriceForProduct)
router.get('/users', userControl.getAllUser )

export default router
