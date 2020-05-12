import { Schema } from  "mongoose";

export const userSchema:Schema = new Schema({

    name: {type:String, required:true,maxlength:10},
    lastName: {type:String, required:true},
    document: {type:Number,required:true},
    birthdate: {type:Date, required:true},
    city: {type:String, required:true},
    neighborhood:{type:String, required:true},
    cellphone:{type:Number, required:true}

 

})

