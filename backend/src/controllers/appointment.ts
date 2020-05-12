import {Request,Response} from "express" 
import { Appointment } from "../db/mongoose";



export const createAppointment=(req:Request,res:Response)=>{

   let {body} = req;
   let objAppointment= new Appointment({
         dayAppointment: body.dayAppointment,
         //appointmentTime:body.appointmentTime,
         placeAppointment:body.placeAppointment,
         users:body.users
   
    
   });
   
   objAppointment.save((err,appointmentDB)=>{
      if (err) {
          res.status(500).json({
              ok:false,
              message:"internat_server_error", 
              err 
          })   
      }
       
      res.status(200).json({
          ok:true,
          appointment:appointmentDB
      })    
  })
  

}