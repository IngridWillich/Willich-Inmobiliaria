// import { AppDataSource } from "./config/data-source";
// import { PORT } from "./config/envs";
// import server from "./server";
// import "reflect-metadata";



// import { AppDataSource } from "./config/data-source";
// import { PORT, HOST, PROTO } from "./config/envs";
// import server from "./server";
// import "reflect-metadata"


// AppDataSource.initialize()
//     .then(() => {
//         server.listen(PORT, () => {
//             console.log(`Server is running on:${PORT}`);
//         });
//     })
//     .catch((error) => console.log(error));


// // Inicializar la aplicación
import express, { Request, Response } from 'express';
import reflect from 'reflect-metadata';
import cors from 'cors';
import morgan from 'morgan';
import { AppDataSource } from './config/data-source';
import router from './routes/indexRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());

// Middleware para registrar solicitudes HTTP (Morgan)
app.use(morgan('dev'));

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

app.use(router);
// Iniciar el servidor
AppDataSource.initialize()
.then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on:${PORT}`);
            });
        })
        .catch((error) => console.log(error));
    