import mongoose from "mongoose";
const { Schema } = mongoose

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }, //video commented on
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        } //one who commented
    },
    {
        timestamps: true
    }
)

export const Comment = mongoose.model("Comment", commentSchema)