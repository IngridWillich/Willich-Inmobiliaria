import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserService,  findUserByCredentialId,  getUserByIdService,  getUsersService } from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
import { User } from "../entities/User";
import UserDto from "../dto/UserDto";
import { getAppointmentByIdService } from "../services/appointmentsService";
import ICredential from "../interfaces/ICredential";
import { Credentials } from "../entities/Credentials";
let users:IUser[]=[];
export const getUsers = async (req: Request, res: Response):Promise<void>=>{
    try {
        const users = await getUsersService() 
        res.status(200).json(users)
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
};//esta bien
export const getUserById = async (req: Request, res: Response) => {
  try {
    const {id}=req.params;
    const user =await getUserByIdService(Number(id))
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};
export const registerUser=async(req:Request,res:Response)=>{
   try {
    const {name,email,birthDate,dni,username,password}=req.body
    const newUser = await createUserService({
      name,
      email,
      birthDate,
      dni,
      username,
      password
    });
    res.status(201).json({ message: "El usuario ha sido creado con éxito", user: newUser })
   } catch (error) {
    res.status(400).json({ message: "Internal Server Error" })
   }
    
//aca tambien
};
/////////////////////////////////
// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     const credential: Credentials = await validateCredentials(username, password);
//     const user:User|null = await getUserByIdService(credential.id);// debrria ser con findUserByCredentialId
//     res.status(200).json({
//         loggin: true,
//         user
//     });
// } catch (error:any) {
//     res.status(404).send(error.message);
// }
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log("Datos recibidos para login:", { username, password }); // Log de datos recibidos
    const credential: Credentials = await validateCredentials(username, password);
    const user: User | null = await getUserByIdService(credential.id); // debería ser con findUserByCredentialId
    res.status(200).json({
      loggin: true,
      user
    });
  } catch (error: any) {
    console.error("Error en loginUser:", error.message); // Log de error detallado
    res.status(404).send(error.message);
  }
};

  

