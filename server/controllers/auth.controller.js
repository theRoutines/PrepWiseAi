import genToken from "../config/token.js"
import User from "../models/user.model.js"


import mongoose from "mongoose";

export const googleAuth = async (req,res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            throw new Error("Database not connected. Please check if MongoDB is running.");
        }
        const {name , email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name , 
                email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token" , token , {
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge:7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)



    } catch (error) {
        console.error("Google Auth Controller Error:", error);
        return res.status(500).json({ 
            message: "Google authentication failed", 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
    
}

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token" , {
            httpOnly:true,
            secure:true,
            sameSite:"none"
        })
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}