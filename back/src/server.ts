
import express from "express";
import router from "./routes/indexRoutes";
import cors from "cors"
import morgan from "morgan"


const server=express();
server.use(morgan("dev"))
server.use(cors)
server.use(express.json())
server.use(router);
export default server;
