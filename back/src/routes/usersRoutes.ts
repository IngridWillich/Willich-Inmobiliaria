import { Router } from "express";
import { getUsers,getUserById,registerUser,loginUser} from "../controllers/usersControllers";
 import { ValidateLogin, ValidateRegistration } from "../middlewares/middlewares";

const UserRouter=Router();
console.log("hola")
UserRouter.get("/users",getUsers);
UserRouter.get("/:id",getUserById);

UserRouter.post("/register",ValidateRegistration,registerUser);
UserRouter.post("/login",ValidateLogin,loginUser);


export default UserRouter;