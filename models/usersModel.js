import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true // Enforce uniqueness for username

    },
    email:{
    type:String,
    required:true,
    unique: true // Enforce uniqueness for username


},
    password:{
        type:String,
        required:true,
    },

})
const User = mongoose.model('User', UserSchema);
export default User;