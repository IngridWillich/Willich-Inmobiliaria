import { Router } from "express";
import UserRouter from "./usersRoutes";
import AppointmentRouter from "./turnsRoutes";

const router: Router=Router();
router.get("http://localhost:3000/users", (req, res) => {
    res.send("Hola mundo");
});
router.use("/users",UserRouter),
router.use("/appointments",AppointmentRouter);

export default router; 