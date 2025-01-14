"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoutes_1 = __importDefault(require("./usersRoutes"));
const turnsRoutes_1 = __importDefault(require("./turnsRoutes"));
const router = (0, express_1.Router)();
router.get("http://localhost:3000/users", (req, res) => {
    res.send("Hola mundo");
});
router.use("/users", usersRoutes_1.default),
    router.use("/appointments", turnsRoutes_1.default);
exports.default = router;
