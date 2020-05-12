import { Router } from "express"
import { createAppointment } from "../controllers/appointment";


export const appointments_router=Router();
appointments_router.post("/appointment",createAppointment);