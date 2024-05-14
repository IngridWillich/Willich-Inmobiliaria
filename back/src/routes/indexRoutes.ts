import { Router } from "express";
import UserRouter from "./usersRoutes";
import AppointmentRouter from "./turnsRoutes";

const router: Router=Router();


router.use("/users",UserRouter),//bien
router.use("/appointments",AppointmentRouter);

export default router; 
