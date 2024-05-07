import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserService, deleteUserService } from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";

let users:IUser[]=[];
export const getUsers = async (req: Request, res: Response) => {
    res.status(201).json(users);
};
export const getUserById = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    try{
        res.status(204).json(user);
    } catch {
        res.status(404).json({ message: "User not found" });
    }
};
export const registerUser=async(req:Request,res:Response)=>{
    console.log("funciona")
    const { username, password,name, birthDate,dni,email } = req.body;
    const credentials={username,password}
    const saveUser={name,email,birthDate,dni}
const credential=await createUserService(saveUser,credentials);
res.status(201).json(credential)

};
/////////////////////////////////
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const id = await validateCredentials(username, password);
        // Aquí puedes agregar la lógica adicional para el login según lo necesites.
        // Por ejemplo, podrías generar un token de sesión y devolverlo como respuesta.
        res.status(200).send("Login successful");
    } catch (error) {
        res.status(400).send("Invalid credentials");
    }
}
//  export const deleteUser = async (req: Request, res: Response) => {
//  try {
//    const userId: number = parseInt(req.params.id);
//   await deleteUserService(userId);
//   res.status(204).send();
// } catch (error) {    
//      res.status(500).json({ message: "Internal Server Error" });
//   }
//  };
