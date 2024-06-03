import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credentials";
import { Appointment } from "../entities/Appointment";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    //dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User,Credentials, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel= AppDataSource.getRepository(User)
export const CredentialsModel= AppDataSource.getRepository(Credentials)
export const AppointmentModel=  AppDataSource.getRepository(Appointment)
