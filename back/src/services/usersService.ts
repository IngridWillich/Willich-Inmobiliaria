import UserDto from "../dto/UserDto";
import credentialsDto from "../dto/credentialsDto";
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
export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}
export const getUserById = (id: number): IUser | undefined => {
    return users.find(user => user.id === id);
};

export const createUserService=async(newUser:UserDto,credentials:credentialsDto):Promise<IUser>=>{
    console.log("service funciona")
    const {name,email,birthdate,nDni}=newUser
    
    const {username,password}=credentials

    const newCredential=await createCredentials(username,password)
    const newUsers={
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialId:newCredential
        }

        id++;
    users.push(newUsers)
    return newUsers;
}
    

export const deleteUserService=async(id:number):Promise<void>=>{
users=users.filter((user:IUser)=>{
    return user.id !==id
});
}
