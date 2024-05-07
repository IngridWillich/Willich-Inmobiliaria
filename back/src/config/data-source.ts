import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credentials";
import { Appointment } from "../entities/appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "Turnos",
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