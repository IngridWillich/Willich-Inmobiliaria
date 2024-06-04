import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";

export const CredentialsModel= AppDataSource.getRepository(Credentials);
export const UserModel= AppDataSource.getRepository(User);
