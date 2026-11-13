import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: [true, "Fullname is required"],
            trim: true,
        },
        avatar: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        orderHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: String,
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);