import {Router} from 'express'
import { CreateCategoryController } from './controllers/createCategoryController'
import { CreateProductController } from './controllers/createProductController'


export const router = Router()




const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()

router.post('/product', createProduct.handle)
router.post('/category', createCategory.handle)


