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
    try {
        const users = yield (0, usersService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: "User not found" });
    }
});
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("funciona");
    const { username, password, name, birthDate, dni, email } = req.body;
    const user = { name, email, birthDate, dni }; //agregue ahora
    const credentials = { username, password };
    // const saveUser={name,email,birthDate,dni} comento ahora
    const newUser = yield (0, usersService_1.createUserService)(user, credentials);
    res.status(201).json(newUser);
    //aca tambien
});
exports.registerUser = registerUser;
/////////////////////////////////
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const loginUser = yield (0, credentialsService_1.validateCredentials)(username, password);
        // Aquí puedes agregar la lógica adicional para el login según lo necesites.
        // Por ejemplo, podrías generar un token de sesión y devolverlo como respuesta.
        res.status(200).send("Login successful");
    }
    catch (error) {
        res.status(400).send("Invalid credentials");
    }
});
exports.loginUser = loginUser;
