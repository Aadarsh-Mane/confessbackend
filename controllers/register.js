import User from "../models/usersModel.js"

import  jwt  from "jsonwebtoken";
export const register = async (req, res) => {

    try {
        const { username,email,password} = req.body;
        const user = new User({
          username,
          email,
          password,
         
        });
        await user.save();
        res.status(201).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error 2' });
      }
    };

    export const updateUser = async (req, res) => {
        const username=req.params.username
        const {email, password } = req.body;
    
        try {
            // Find the user by username
            const user = await User.findOneAndUpdate(
                { username: username },
                { email: email, password: password, username: username }, // Update fields
                { new: true } // Return the updated document
            );
    
            // If user doesn't exist, return an error
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Respond with updated user details
            res.status(200).json({ message: "User updated successfully", user });
        } catch (error) {
            // Handle errors
            console.error("Error updating user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    
    export const deleteUser = async (req, res) => {
        const username=req.params.username
    
        try {
            // Find the user by username
            const user = await User.findOneAndDelete(
                { username: username },

                { new: true } // Return the updated document
            );
    
            // If user doesn't exist, return an error
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Respond with updated user details
            res.status(200).json({ message: "User deleted successfully", user });
        } catch (error) {
            // Handle errors
            console.error("Error deleting user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };

    export const getUserByUsername = async (req, res) => {
        const username = req.params.username;
    
        try {
            // Find the user by username
            const user = await User.findOne({ username });
    
            // If user doesn't exist, return an error
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Respond with user details
            res.status(200).json({ user });
        } catch (error) {
            // Handle errors
            console.error("Error fetching user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
    export const loginUser = async (req, res) => {
        const { username, password } = req.body;
    
        try {
            // Find the user by username and password
            const user = await User.findOne({ username, password });
    
            // If user doesn't exist or password is incorrect, return an error
            if (!user) {
                return res.status(401).json({ message: "Invalid username or password" });
            }
           let token=jwt.sign({username:req.body.username, password:req.body.password},'hello',{
            expiresIn:"24h"
           })
           res.json({
            token:token,
            msg:"success"
           })
            // Respond with a success message or user details as needed
            res.status(200).json({ message: "Login successful", user });
        } catch (error) {
            // Handle errors
            console.error("Error logging in:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
export const checkUserName=async(req, res) =>{
    const username = req.params.username;
    
        try {
            // Find the user by username
            const user = await User.findOne({ username });
    
            // If user doesn't exist, return an error
            if (!user) {
                return res.status(404).json({ status: false });
            }
    
            // Respond with user details
            res.status(200).json({ status: true });
        } catch (error) {
            // Handle errors
            console.error("Error fetching user:", error);
            res.status(500).json({ message: "Internal server error" });
        }

}