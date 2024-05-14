import { UserModel } from "../config/data-source";
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
export const getUserById = async(id: number):Promise<User|undefined> => {
    const Founded=await UserModel.findOneBy({id});
    if(Founded){
        return Founded
    }
};

export const createUserService=async(newUser:UserDto,credentials:credentialsDto):Promise<User>=>{
    const {name,email,birthDate,dni}=newUser
    const {username,password}=credentials

    const newCredential=await createCredentials(username,password)
    const userCreated=UserModel.create({
            name,
            email,
            birthDate:birthDate,
            dni:dni,
            credentials:{id:newCredential}}
        )
        await UserModel.save(userCreated);
        return userCreated;//aca estaba retornando newUserEntity
    } 
    

// export const deleteUserService=async(id:number):Promise<void>=>{
// users=users.filter((user:IUser)=>{
//     return user.id !==id
// });
// }
