import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    // to access one of the user type
    // populate("user.youtuber") or populate("user.brand")

    // if comment is made for a youtuber
    // store a youtuber id in user.youtuber
    // if brand - user.brand

    user: {
      youtuber: { type: Schema.Types.ObjectId, ref: "youtuber" },
      brand: { type: Schema.Types.ObjectId, ref: "brand" },
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
