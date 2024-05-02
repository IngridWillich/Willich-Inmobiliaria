import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUsers";

let users: IUser[]=[{
    id:0,
    name:"ingrid",
    email:"willichingrid@gmail.com",
    active: true
}];
let id:number=1;
export const getUsersService=async(userData:UserDto): Promise<IUser>=>{
    const newUser: IUser={
        id,
        name: userData.name,
        email:userData.email,
        active:userData.active
    }
    users.push(newUser);
    id++;
    return newUser
}
export const createUserService=async():Promise<IUser[]>=>{
return users;
}
export const deleteUserService=async(id:number):Promise<void>=>{
users=users.filter((user:IUser)=>{
    return user.id !==id
});
}
