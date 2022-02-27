import {Router} from 'express'
import { CreateCategoryController } from './controllers/createCategoryController'
import { CreateProductCategoryController } from './controllers/createProductCategory'
import { CreateProductController } from './controllers/createProductController'
import { GetAllProductsController } from './controllers/getAllProductsController'


export const router = Router()




const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const getAllProducts = new GetAllProductsController()


router.get('/allProducts', getAllProducts.handle)
router.post('/product', createProduct.handle)
router.post('/category', createCategory.handle)
router.post('/productCategory', createProductCategory.handle)


