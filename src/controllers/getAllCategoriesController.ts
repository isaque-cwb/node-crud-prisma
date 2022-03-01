import { Request, Response } from "express"
import { prismaClient } from "../database/prismaClient"



export class GetAllCategoriesController{
    async handle(request:Request, response: Response){
        //const {id_product, id_category} = request.body

        const getAllCategories = await prismaClient.category.findMany()

        return response.json(getAllCategories)
    }
}