import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;      //destructure Schema function from mongoose module and store in Schema

//user => video viewers + video publishers


//model
//in mongodb id field is added by default
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true //to enhance search
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }    //for createdAt and updatedAt
)

//adding middlerwares

//prehook - before saving, posthook - after saving

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); //avoid rehashing       
    this.password = await bcrypt.hash(this.password, 10); //Await the hashing function
    next();
});
//This middleware ensure that password only hashed during new user creation and password change


export const User = mongoose.model("User", userSchema)
//create model "User" in mongoDB with schema => userSchema
