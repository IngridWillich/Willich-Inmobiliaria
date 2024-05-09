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
exports.loginUser = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
const usersService_1 = require("../services/usersService");
const credentialsService_1 = require("../services/credentialsService");
let users = [];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    try {
        res.status(200).json(user);
    }
    catch (_a) {
        res.status(404).json({ message: "User not found" });
    }
});
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("funciona");
    const { username, password, name, birthDate, dni, email } = req.body;
    const credentials = { username, password };
    const saveUser = { name, email, birthDate, dni };
    const credential = yield (0, usersService_1.createUserService)(saveUser, credentials);
    res.status(201).json(credential);
});
exports.registerUser = registerUser;
/////////////////////////////////
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const id = yield (0, credentialsService_1.validateCredentials)(username, password);
        // Aquí puedes agregar la lógica adicional para el login según lo necesites.
        // Por ejemplo, podrías generar un token de sesión y devolverlo como respuesta.
        res.status(200).send("Login successful");
    }
    catch (error) {
        res.status(400).send("Invalid credentials");
    }
});
exports.loginUser = loginUser;
//  export const deleteUser = async (req: Request, res: Response) => {
//  try {
//    const userId: number = parseInt(req.params.id);
//   await deleteUserService(userId);
//   res.status(204).send();
// } catch (error) {    
//      res.status(500).json({ message: "Internal Server Error" });
//   }
//  };
