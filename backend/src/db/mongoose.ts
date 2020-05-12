import { model } from "mongoose"

import { userSchema } from "../collections/users"
import { appointmentSchema } from "../collections/appointment"


   
export const User= model("Users", userSchema);
export const Appointment= model("Appointments", appointmentSchema);

