"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = exports.CredentialsModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credentials_1 = require("../entities/Credentials");
const Appointment_1 = require("../entities/Appointment");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Credentials_1.Credentials, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialsModel = exports.AppDataSource.getRepository(Credentials_1.Credentials);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
