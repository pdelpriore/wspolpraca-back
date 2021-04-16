import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    userType: {
      type: String,
      required: true,
      enum: ["youtuber", "brand"],
    },
    user: {
      type: Schema.Types.ObjectId,
      refPath: "userType",
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { collection: "comment" }
);

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
