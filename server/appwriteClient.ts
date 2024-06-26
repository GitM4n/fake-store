import * as sdk from 'node-appwrite'

const client = new sdk.Client();




client
    .setEndpoint(process.env.APPWRITE_ENDPOINT as string)
    .setProject(process.env.APPWRITE_PROJECT as string)
    .setKey(process.env.APPWRITE_KEY as string);



console.log(process.env.APPWRITE_KEY)

const account = new sdk.Account(client);    
const databases = new sdk.Databases(client);


export {account, databases, client}