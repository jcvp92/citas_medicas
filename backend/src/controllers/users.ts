import {Request,Response} from "express" 
import { User } from "../db/mongoose";
// CRUD completo de uuario
export const createdUsers=(req:Request,res:Response)=>{
      // metodo crear un usuario donde utlizamos dos metodos req y res 
    let {body} = req;
    let objUser = new User({
        name: body.name,
        lastName: body.lastName,
        document: body.documents,
        birthdate: body.birthdate,
        city: body.city,
        neighborhood: body.neighborhood,
        cellphone: body.cellphone,
     
    });
         // 
    objUser.save((err,userDB)=>{
        if (err) {
            res.status(500).json({
                ok:false,
                message:"internat_server_error", 
                err 
            })   
        }
         // 
        res.status(200).json({
            ok:true,
            user:userDB
        })    
    })
    
}