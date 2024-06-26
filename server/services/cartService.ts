
import { ID } from "node-appwrite"
import { databases } from "../appwriteClient"
import express from 'express'

const databaseID = '6666b836003e6db3b7ab'
const collectionID = '6666b83d002d6c24ced2'

class CartService {
    async addToCart(req:express.Request, res:express.Response, next:express.NextFunction) {
        try {

         const {id} = req.body


          const result =  await databases.createDocument(
                databaseID,
                collectionID,
                ID.unique(),
                {id:id, quantity: 1})

            res.status(200).json({data:result})

        } catch (error) {
            next(error)
        }    
        
    
    }

    // async updateQuantity(id: string, quantity: number) {
    //     return await databases.updateDocument(
    //         databaseID,
    //         collectionID,
    //         id,
    //         {quantity})
    // }


    // async deleteFromCart(id: string) {
    //     return await databases.deleteDocument(
    //         databaseID,
    //         collectionID,
    //         id)
    // }

    // async getCart() {
    //     return await databases.listDocuments(
    //         databaseID,
    //         collectionID
    //     )
    // }
}


export const cartService = new CartService()