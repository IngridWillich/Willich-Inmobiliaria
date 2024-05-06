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
exports.deleteUserService = exports.createUserService = exports.getUserById = exports.getUsersService = void 0;
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
    return users;
});
exports.getUsersService = getUsersService;
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.getUserById = getUserById;
const createUserService = (newUser, credentials) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("service funciona");
    const { name, email, birthdate, nDni } = newUser;
    const { username, password } = credentials;
    const newCredential = yield (0, credentialsService_1.createCredentials)(username, password);
    const newUsers = {
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialId: newCredential
    };
    id++;
    users.push(newUsers);
    return newUsers;
});
exports.createUserService = createUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => {
        return user.id !== id;
    });
});
exports.deleteUserService = deleteUserService;
