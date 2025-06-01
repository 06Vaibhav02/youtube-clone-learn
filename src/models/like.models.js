import mongoose from "mongoose";
const { Schema } = mongoose;

const likeSchema = new Schema(
    {
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }, //like can be on a comment
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }, //like can be on a video
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet"
        }, //tweet can be liked
        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

/*if comment (_id = 222) is liked by vaibhav (_id = 111) then schema stored
{
    comment: ObjectId("222")
    likedby: ObjectId("111")
    createdAt: 10:00:00
    updatedAt: 10:30:00
}
*/
