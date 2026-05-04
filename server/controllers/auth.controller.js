import genToken from "../config/token.js"
import User from "../models/user.model.js"


import mongoose from "mongoose";

export const googleAuth = async (req,res) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            throw new Error("Database not connected. Please check if MongoDB is running.");
        }
        
        const {name , email} = req.body
        
        if (!email) {
            return res.status(400).json({ message: "Email is required for authentication" });
        }

        console.log(`Processing Google login for: ${email}`);

        let user = await User.findOne({email})
        if(!user){
            console.log(`Creating new user: ${email}`);
            user = await User.create({
                name: name || email.split('@')[0], 
                email
            })
        }
        
        let token = await genToken(user._id)
        
        // Use secure cookies only in production/HTTPS
        const isProduction = process.env.NODE_ENV === 'production' || req.protocol === 'https';
        
        res.cookie("token" , token , {
            httpOnly:true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            maxAge:7 * 24 * 60 * 60 * 1000
        })

        console.log(`Successfully authenticated user: ${email}`);
        return res.status(200).json(user)

    } catch (error) {
        console.error("Google Auth Controller Error:", error);
        return res.status(500).json({ 
            message: "Google authentication failed", 
            error: error.message,
            details: error.stack
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