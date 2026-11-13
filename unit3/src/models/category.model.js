import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: true,
            trim: true,
            lowercase: true,
        },

        description: {
            type: String,
            trim: true,
        },

        image: {
            type: String,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Category = mongoose.model("Category", categorySchema);