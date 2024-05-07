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
export const getUsersService = async (): Promise<IUser[]> => {
    const users:User[]=await UserModel.find({relations:["appointments"]})
    return users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthDate,
        nDni: user.dni, 
        credentialId: user.credentials.id
}));
} 
export const getUserById = async(id: number):Promise<User|undefined> => {
    const Founded=await UserModel.findOneBy({id});
    if(Founded){
        return Founded
    }
};

export const createUserService=async(newUser:UserDto,credentials:credentialsDto):Promise<User>=>{
    const {name,email,birthdate,nDni}=newUser
    const {username,password}=credentials

    const newCredential=await createCredentials(username,password)
    const newUserEntity=UserModel.create({
            name,
            email,
            birthDate:birthdate,
            dni:nDni,
            credentials:{id:newCredential}}
        )
        await UserModel.save(newUser);
        return newUserEntity;
    } 
    

export const deleteUserService=async(id:number):Promise<void>=>{
users=users.filter((user:IUser)=>{
    return user.id !==id
});
}
