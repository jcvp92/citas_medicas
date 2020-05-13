import { model } from "mongoose"

import { userSchema } from "../collections/users"
import { appointmentSchema } from "../collections/appointment"


   // la conexion del modelo a nuestra BD
export const User= model("Users", userSchema);
export const Appointment= model("Appointments", appointmentSchema);

