"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.PORT = void 0;
require("detenv/config");
const { PORT, PROTO, HOST } = process.env;
exports.PORT = PORT;
exports.PROTO = PROTO;
exports.HOST = HOST;
// const {PORT,PROTO,HOST,ENVIROMENT}=process.env 
// export{
//     PORT,
//     PROTO,
//     HOST
// }
