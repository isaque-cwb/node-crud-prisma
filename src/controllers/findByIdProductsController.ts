import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"



export class FindByIdProductsController{
    async handle(request:Request, response: Response){
        const {id} = request.params

        const findByIdProduct = await prismaClient.product.findUnique({
            where: {
                id
            }
        })

        return response.json(findByIdProduct)
    }
}