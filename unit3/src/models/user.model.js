import mongoose, { Schema } from "mongoose";
import bycrpt from "bcrypt";

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


userSchema.pre("save", async function(next){
    if(!this.isModified) return next();
    
    this.password = bycrpt.hash(this.password, 10);
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bycrpt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiryIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}


userSchema.methods.generateRefreshToken = function (){
    jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiryIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema);