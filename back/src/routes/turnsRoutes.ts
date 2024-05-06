import { Router } from "express";

import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "../controllers/turnsControllers";
const AppointmentRouter: Router=Router();

AppointmentRouter.get("/", getAppointments);
AppointmentRouter.get("/appointment", getAppointmentById);
AppointmentRouter.post("/schedule", scheduleAppointment);
AppointmentRouter.put("/cancel", cancelAppointment);


export default AppointmentRouter;