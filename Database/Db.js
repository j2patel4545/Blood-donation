import mongoose from "mongoose";

export const DatabaseConnection = async ()=>{
           try {
             await mongoose.connect("mongodb://localhost:27017/school");
             console.log("Database Connected Succesfully..!");
           } catch (error) {
            
            console.log("Database NOT Connected..!");
            console.log(error);
            
           }
            
}