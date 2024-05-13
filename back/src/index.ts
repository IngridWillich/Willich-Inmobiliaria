// import { AppDataSource } from "./config/data-source";
// import { PORT } from "./config/envs";
// import server from "./server";
// import "reflect-metadata";


// AppDataSource.initialize().then(()=>{
//     console.log("Data Source initialized")
//     server.listen(PORT, ()=>{
//         console.log(`Server listening on port ${PORT}`);
//     });
// })
import { AppDataSource } from "./config/data-source";
import { PORT, HOST, PROTO } from "./config/envs";
import server from "./server";
import "reflect-metadata"


AppDataSource.initialize()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on:${PORT}`);
        });
    })
    .catch((error) => console.log(error));