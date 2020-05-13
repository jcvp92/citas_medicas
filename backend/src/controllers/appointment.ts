import {Request,Response} from "express" 
import { Appointment } from "../db/mongoose";

//CRUD completo de citas

 
export const createAppointment=(req:Request,res:Response)=>{
// crear
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
//traer
export const getAppointments = (req: Request, res: Response) => {
    Appointment.find()
                .exec((err, appointmenst) => {
                    if (err) {
                        res.status(500).json({
                            ok:false,
                            message:"internat_server_error", 
                            err 
                        })   
                    }
                    res.status(200).json({
                        ok: true,
                        appointmenst
                    })
                })
}

export const uptadeAppointmentById = (req: Request, res: Response) => {
    let id = req.params.id;
    let body = req.body
    Appointment.findByIdAndUpdate(id, body, {new: true}, (err, appointmentDB) => {
        if (err) {
            res.status(500).json({
                ok:false,
                message:"internat_server_error", 
                err 
            })   
        }
        if (!appointmentDB) {
            res.status(404).json({
                ok:false,
                err: {
                    message: 'not found appointment'
                }
            })   
        }

        res.status(200).json({
            ok: true,
            appointment: appointmentDB
        })
        
    })
}

export const deleteAppointmentById = (req: Request, res: Response) => {
    let id = req.params.id;

    Appointment.findByIdAndRemove( id , (err, appointmentDB) => {
        if (err) {
            res.status(500).json({
                ok:false,
                message:"internat_server_error", 
                err 
            })   
        }
        if (!appointmentDB) {
            res.status(404).json({
                ok:false,
                err: {
                    message: 'not found appointment'
                }
            })   
        }
        res.status(200).json({
            ok: true,
            message: 'appointment remove successfully',
            appointment: appointmentDB
        })
    })
}