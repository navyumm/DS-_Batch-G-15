// const mongoose = require("mongoose")
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: [true, "username is required"],
            lowercase: true,
            trim: true
        },
        email: String,
        fullName: String,
        avatar: url,

    }
);

export const User = mongoose.model("User", userSchema);