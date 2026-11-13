import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: String,
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            default: 0,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        images: [
            {
                public_id: String,
                url: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", productSchema);