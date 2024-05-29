import { Router } from "express";

import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "../controllers/turnsControllers";
import { error } from "console";
const AppointmentRouter: Router=Router();
console.log("routes")
AppointmentRouter.get("/", getAppointments);
AppointmentRouter.get("/:id", getAppointmentById);
AppointmentRouter.post("/schedule", scheduleAppointment);// create
AppointmentRouter.put("/cancel/:id", cancelAppointment);


export default AppointmentRouter;