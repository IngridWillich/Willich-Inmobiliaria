"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentials = exports.createCredentials = void 0;
let credentials = [];
let id = 0;
const createCredentials = (username, password) => {
    const newCredential = {
        id,
        username,
        password
    };
    id++;
    credentials.push(newCredential);
    return newCredential.id;
};
exports.createCredentials = createCredentials;
const validateCredentials = (username, password) => {
    const foundCredential = credentials.find(credential => credential.username === username);
    if (!foundCredential) {
        return null;
    }
    if (foundCredential.password === password) {
        return foundCredential.id;
    }
    else {
        return null;
    }
};
exports.validateCredentials = validateCredentials;
