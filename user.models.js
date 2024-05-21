import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({

    username:{
        type:string,
        required:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:string,
        required:[true,'password is required']
    }



},{timestamps:true})

export const user=mongoose.model('User',userSchema)