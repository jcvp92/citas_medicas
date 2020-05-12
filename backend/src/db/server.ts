import express, {Request,Response} from "express"
import mongoose from "mongoose";
import { users_router } from "../routers/users";
import { appointments_router } from "../routers/appointments";

 export  class Server { 
    public app: express.Application;
    public static _instance:Server;
    public port=3001;
     
    // contructor para llamar las funciones
    constructor() {
       this.app=express();
       this.settings__json();
       this.settings__routers();
       this.connect__mongodb();

    }
     //configuring the function  json
     //configurando el json
     
    settings__json() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true }))
    }

    // config routers
    settings__routers() {
        this.app.get("/", (req: Request, res: Response) => {
            res.json({
                ok: true, 
                message:"the server is active"
            })
        });
        this.app.use("",users_router);
        this.app.use("",appointments_router);

        

    } 


    //conection mongodb
    connect__mongodb() {
        mongoose.connect("mongodb://localhost:27017", {
            useCreateIndex: true, 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:"citasmedicas"
        }).then(() => {
            
            console.log("conection mongodb")
        })
        .catch((error) => {

            console.log("error",error)
        })    
    }
   
    // corriendo el servidor
    run__start() {
        this.app.listen(this.port, () => {
            console.log("server running successfully in port", this.port)
        })
        
    }
   
}