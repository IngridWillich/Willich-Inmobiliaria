import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credentials";
import { Appointment } from "../entities/Appointment";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),//porque todo lo qe traemos del env es en string, por lo que tenemos que convertirlo
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    //dropSchema: true,//
    synchronize: true,//cuando se termina se pasan a false
    logging: ["error"],
    entities: [User,Credentials, Appointment],
    subscribers: [],
    migrations: [],
})

export const UserModel= AppDataSource.getRepository(User)
export const CredentialsModel= AppDataSource.getRepository(Credentials)
export const AppointmentModel=  AppDataSource.getRepository(Appointment)
