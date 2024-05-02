import { Router } from "express";
import { createUser,getUsers,deleteUser } from "../controllers/usersControllers";

const router: Router=Router();

router.use("/users",(req,res)=>{
    res.send("todo ok");
})
router.post("/users")
router.delete("/users")


export default router;