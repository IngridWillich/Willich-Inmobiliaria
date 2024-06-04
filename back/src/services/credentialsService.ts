

import { AppDataSource, CredentialsModel,UserModel } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
let id=1
let credentials:ICredential[]=[];
export const createCredentials=async(username:string,password:string):Promise<number|undefined>=>{
    try {
        const newCredential=await AppDataSource.manager.save(Credentials,{username,password})                      
        return newCredential.id
        
    } catch (error) {
        throw new Error("Error creating credentials")
    }


}

export const validateCredentials=async(username:string,password:string):Promise<ICredential>=>{
    const foundCredential = await CredentialsModel.findOne({where:{username,password}})
       
if (!foundCredential) {
    throw new Error ("Credenciales incorrectas")
} return {
   id:foundCredential.id,
   username:foundCredential.username,
   password:foundCredential.password
}

}
