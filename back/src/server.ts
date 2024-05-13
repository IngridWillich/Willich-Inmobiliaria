
import express from "express";
import router from "./routes/indexRoutes";
import cors from "cors"

const server=express();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  };
  
  
  server.use(cors(corsOptions));
server.use(express.json())

server.use(router);
export default server;
