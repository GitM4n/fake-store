import dotenv from 'dotenv'
dotenv.config()


import express from 'express';
import cors from 'cors'
import { router } from './router'

import { databases } from "./appwriteClient"


const app =express()

const userDb = ['6666b836003e6db3b7ab', '6666c7d2002521d6b8d5']

const PORT = process.env.PORT || 4000



app.use(express.json())
app.use(cors())
app.use(router)


app.get('/', async(req:express.Request, res:express.Response) => {
    res.send('Server working')

})











app.listen(PORT, async() => {
    console.log('Server running on port ' + PORT)
    
   
  
})

