"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.PORT = void 0;
require("dotenv/config");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
const { PORT, PROTO, HOST } = process.env;
exports.PORT = PORT;
exports.PROTO = PROTO;
exports.HOST = HOST;
