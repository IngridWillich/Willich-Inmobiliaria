import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";


AppDataSource.initialize().then(()=>{
    console.log("Data Source initialized")
})
server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
});