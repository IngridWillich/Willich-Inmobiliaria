import { Router } from "express";
import { getUsers,getUserById,registerUser,loginUser} from "../controllers/usersControllers";
import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "../controllers/turnsControllers";
const router: Router=Router();

router.get("/users",getUsers);
router.get("/users/:id",getUserById);

router.post("/users/register",registerUser);
router.post("/users/login",loginUser);

router.get("/appointments", getAppointments);
router.get("/appointments/:id", getAppointmentById);
router.post("/appointments/schedule", scheduleAppointment);
router.put("/appointments/cancel", cancelAppointment);


export default router;