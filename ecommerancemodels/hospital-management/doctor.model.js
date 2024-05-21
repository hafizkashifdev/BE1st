import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      salary:{
        type:String,
        required: true,

      },
      qualification:{
        type: String,
        required: true,
      },
      experienceInYears:{
        type: String,
        default: 0,
      },
      worksInHospitals:[{
        type:mongoose.Schema.Types.isObjectId,
        ref:"Hospital"
      }]
},{timestamps:true});

export const Doctor= mongoose.model("Doctor",doctorSchema)