import mongoose from "mongoose";
const { Schema } = mongoose;

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        } //each video will be owned by one user

    },
    {
        timestamps: true
    }//for createdAt and updatedAt

)



export const Video = mongoose.model("Video", videoSchema)