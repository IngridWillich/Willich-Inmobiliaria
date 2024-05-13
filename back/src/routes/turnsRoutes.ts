import { Router } from "express";

import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "../controllers/turnsControllers";
import { error } from "console";
const AppointmentRouter: Router=Router();
console.log("routes")
AppointmentRouter.get("/", (req,res)=>{
res.status(200).json({message:"respondiendo"})
});
AppointmentRouter.get("/:id", getAppointmentById);
AppointmentRouter.post("/schedule", scheduleAppointment);
AppointmentRouter.put("/cancel/:id", cancelAppointment);


export default AppointmentRouter;