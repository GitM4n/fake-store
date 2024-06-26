import * as express from 'express'
import { cartService } from './services/cartService'


export const router = express.Router()

router.post('/cart', cartService.addToCart)