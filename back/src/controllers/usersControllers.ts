import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";

let users:IUser[]=[];
export const getUsers = async (req: Request, res: Response) => {
    res.status(201).json(users);
};
export const getUserById = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
export const registerUser=async(req:Request,res:Response)=>{
    const { username, password } = req.body;

};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
};