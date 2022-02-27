import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"



export class GetAllProductsController{
    async handle(request:Request, response: Response){
        //const {id_product, id_category} = request.body

        const getAllProducts = await prismaClient.product.findMany()

        return response.json(getAllProducts)
    }
}