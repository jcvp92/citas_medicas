// importar una propiedad de express llamada router
import { Router }  from "express"
import { createdUsers } from "../controllers/users";

// exportar una constante de user router la estamos igualando router de express
export const users_router=Router();
//re declarando a user router con metodo post 
users_router.post("/user", createdUsers);
