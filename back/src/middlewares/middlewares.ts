import { Request,Response,NextFunction } from "express"; 

export const ValidateRegistration=(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,birthDate,dni,username,password}=req.body;
    if(!name || !email  || !birthDate  || !dni ||!username || !password ){
        return res.status(400).json({message:"All fields must be completed"})
    }
    next();
};
 export const ValidateLogin=(req:Request,res:Response,next:NextFunction)=>{
    const {email, password}=req.body;
    if(!email || !password ){
        return res.status(400).json({message:"Username and password are required"})
    }
next();
 };