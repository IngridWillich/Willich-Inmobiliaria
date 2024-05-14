import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserService,  getUsersService } from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
import { User } from "../entities/User";
let users:IUser[]=[];
export const getUsers = async (req: Request, res: Response):Promise<void>=>{
    // res.status(200).send("get users")
    try {
        const users = await getUsersService() 
        res.status(200).json(users)
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
};
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const userId: number = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
export const registerUser=async(req:Request,res:Response)=>{
    console.log("funciona")
    const { username, password,name, birthDate,dni,email } = req.body;
    const user={name,email,birthDate,dni} //agregue ahora
    const credentials={username,password}
    // const saveUser={name,email,birthDate,dni} comento ahora
const newUser:User=await createUserService(user,credentials);
res.status(201).json(newUser)
//aca tambien
};
/////////////////////////////////
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const loginUser= await validateCredentials(username, password);
        res.status(200).send("Login successful");
    } catch (error) {
        res.status(400).send("Invalid credentials");
    }
}
