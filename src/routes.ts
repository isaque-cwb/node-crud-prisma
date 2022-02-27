import {Router} from 'express'
import { CreateProductController } from './controllers/createProductController'


export const router = Router()




const createProduct = new CreateProductController()

router.post('/product', createProduct.handle)


