import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});