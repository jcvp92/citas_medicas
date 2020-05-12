import { Router }  from "express"
import { createdUsers } from "../controllers/users";


export const users_router=Router();
users_router.post("/user", createdUsers);
