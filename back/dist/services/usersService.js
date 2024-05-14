"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.getUserById = exports.getUsersService = void 0;
const data_source_1 = require("../config/data-source");
const credentialsService_1 = require("./credentialsService");
let users = [{
        id: 0,
        name: "Ingrid",
        email: "willichingrid@gmail.com",
        birthdate: new Date(),
        nDni: 45757841,
        credentialId: 1,
    }];
let id = 1;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find({ relations: ["appointments"] });
    return users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthDate,
        nDni: user.dni,
        credentialId: user.credentials.id
    }));
});
exports.getUsersService = getUsersService;
// export const getUsersService = async () :Promise<User[]> =>{
//     try {
//         //! SIN REPOSITORIO
//       //  const users = await AppDataSource.manager.find(User) //* AppDataSource GENERO LA CONEXION PARA BUSCAR LOS USUARIOS - CON MANAGER ACCEDO A TODAS LAS TABLAS
//         //! CON REPOSITORIO
//         const users = await UserModel.find({relations: ["credential", "appointments"]}) //* TRAEME TODOS LOS USUARIOS Y SUS RELACIONES
//         return users
//     } catch (error:any) {
//         throw new Error(error)
//     }
// } 
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Founded = yield data_source_1.UserModel.findOneBy({ id });
    if (Founded) {
        return Founded;
    }
});
exports.getUserById = getUserById;
const createUserService = (newUser, credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthDate, dni } = newUser;
    const { username, password } = credentials;
    const newCredential = yield (0, credentialsService_1.createCredentials)(username, password);
    const userCreated = data_source_1.UserModel.create({
        name,
        email,
        birthDate: birthDate,
        dni: dni,
        credentials: { id: newCredential }
    });
    yield data_source_1.UserModel.save(userCreated);
    return userCreated; //aca estaba retornando newUserEntity
});
exports.createUserService = createUserService;
// export const deleteUserService=async(id:number):Promise<void>=>{
// users=users.filter((user:IUser)=>{
//     return user.id !==id
// });
// }
