

import { CredentialsModel,UserModel } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
let credentials:ICredential[]=[];
let id:number=0
export const createCredentials=async(username:string,password:string):Promise<number>=>{
   const newCredentials:Credentials=CredentialsModel.create({username,password})
await CredentialsModel.save(newCredentials);
return newCredentials.id;
}

export const validateCredentials=async(username:string,password:string):Promise<User | null>=>{
    const foundCredential = await CredentialsModel.findOne({where:{username,password}})
       
if (!foundCredential) {
    throw new Error ("Not found")
} else {
    const user = await UserModel.findOne({ where: { id: foundCredential.id } });
    return user;
}

}
