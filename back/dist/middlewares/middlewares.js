"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateLogin = exports.ValidateRegistration = void 0;
const ValidateRegistration = (req, res, next) => {
    const { name, email, birthDate, dni, username, password } = req.body;
    if (!name || !email || !birthDate || !dni || !username || !password) {
        return res.status(400).json({ message: "All fields must be completed" });
    }
    next();
};
exports.ValidateRegistration = ValidateRegistration;
const ValidateLogin = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    next();
};
exports.ValidateLogin = ValidateLogin;
