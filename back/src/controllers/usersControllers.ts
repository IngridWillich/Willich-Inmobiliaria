import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserService,  getUserByIdService,  getUsersService } from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
import { User } from "../entities/User";
import UserDto from "../dto/UserDto";
import { getAppointmentByIdService } from "../services/appointmentsService";
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
export const getUserById = async (req: Request, res: Response) => {
  try {
    const {id}=req.params;
    const user =await getUserByIdService(Number(id))
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User not found" });
  }
};
export const registerUser=async(req:Request,res:Response)=>{
   try {
    const newUser:UserDto=req.body
    const user:User = await createUserService(newUser);
    res.status(200).json({ message: "El usuario ha sido creado con éxito", user })
   } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
   }
    
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
