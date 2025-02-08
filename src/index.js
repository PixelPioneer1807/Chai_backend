// require('dotenv'.config({path: './env'}))
import dotenv from "dotenv"


//database se jb bhi baat kro try catch lagao ya async await lagao
import mongoose from "mongoose";
import { DB_NAME} from "./constants.js"
import connectDB from "./db/dbdb.js";

dotenv.config();



connectDB()






















/*
import express from "express"
const app=express()

;( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is listening on port ${process.env.PORT}")
        })
    }catch(error){
        console.error("EEEOR: ",error)
        throw err
    }
})() //called ifis
 */   //this is the first approach to connect database use try catch error handling and database in in another continent to we've used async await