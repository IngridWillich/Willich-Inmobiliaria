"use strict";
// import { AppDataSource } from "./config/data-source";
// import { PORT } from "./config/envs";
// import server from "./server";
// import "reflect-metadata";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// AppDataSource.initialize().then(()=>{
//     console.log("Data Source initialized")
//     server.listen(PORT, ()=>{
//         console.log(`Server listening on port ${PORT}`);
//     });
// })
const data_source_1 = require("./config/data-source");
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
data_source_1.AppDataSource.initialize()
    .then(() => {
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server is running on:${envs_1.PORT}`);
    });
})
    .catch((error) => console.log(error));
