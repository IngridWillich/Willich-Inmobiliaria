import { AppDataSource, UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import credentialsDto from "../dto/credentialsDto";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUsers";
import { createCredentials } from "./credentialsService";

let users: IUser[]=[{
    id:0,
    name:"Ingrid",
    email:"willichingrid@gmail.com",
    birthdate:new Date(),
    nDni:45757841,
    credentialId:1,
    }]  
let id:number=1;
export const getUsersService = async (): Promise<User[]> => {
    // const users:User[]=await UserModel.find({relations:["appointments"]})
    return await UserModel.find()
}

// } 
export const getUserByIdService = async(id: number):Promise<User|null> => {
    try {
        const user=await UserModel.findOne({where:{id},relations:["credentials","appointments"]})
        return user;
    } catch (error) {
        throw new Error("User not found");
    }
};

export const createUserService=async(newUser:UserDto):Promise<User>=>{
try {
    const newCredential=await createCredentials(newUser.username,newUser.password)
    const userCreated= await UserModel.save({
            name:newUser.name,
            email:newUser.email,
            birthDate:newUser.birthDate,
            dni:newUser.dni,
            Credentials:newCredential
        })
        return userCreated;
    } catch (error) {
        throw new Error("Error creating user")
    }

    
    
}
    
    

// export const deleteUserService=async(id:number):Promise<void>=>{
// users=users.filter((user:IUser)=>{
//     return user.id !==id
// });
// }
