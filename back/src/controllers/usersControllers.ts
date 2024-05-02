import { Request, Response } from "express";
import { createUserService, getUsersService,deleteUserService} from "../services/usersService";
import IUser from "../interfaces/IUsers";


export const getUsers = async (req: Request, res: Response) => {
    const { name, email, active } = req.body;
    const newUser: IUser = await getUsersService({ name, email, active }); 
    res.status(201).json(newUser);
}
export const createUser=async()=>{

}
export const deleteUser=async()=>{

}
