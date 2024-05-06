import { Router } from "express";
import { getUsers,getUserById,registerUser,loginUser} from "../controllers/usersControllers";

const UserRouter: Router=Router();

UserRouter.get("/",getUsers);
UserRouter.get("/:id",getUserById);

UserRouter.post("/register",registerUser);
UserRouter.post("/login",loginUser);


export default UserRouter;