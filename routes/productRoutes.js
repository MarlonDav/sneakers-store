import express from 'express'
import { productControl } from '../controllers/index.js'

const router = express.Router()

router.get('/products', productControl.getInStockProducts)






export default router