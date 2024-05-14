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
exports.validateCredentials = exports.createCredentials = void 0;
const data_source_1 = require("../config/data-source");
let id = 1;
let credentials = [];
const createCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredentials = data_source_1.CredentialsModel.create({ username, password });
    yield data_source_1.CredentialsModel.save(newCredentials);
    return newCredentials.id;
});
exports.createCredentials = createCredentials;
const validateCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCredential = yield data_source_1.CredentialsModel.findOne({ where: { username, password } });
    if (!foundCredential) {
        throw new Error("Not found");
    }
    else {
        const user = yield data_source_1.UserModel.findOne({ where: { id: foundCredential.id } });
        return user;
    }
});
exports.validateCredentials = validateCredentials;
