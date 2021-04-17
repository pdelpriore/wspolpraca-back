import { model, Schema, Model, Document } from "mongoose";
import { IYoutuber } from "../user/Youtuber";
import { IBrand } from "../user/Brand";

export interface IComment extends Document {
  user: IYoutuber | IBrand;
  content: string;
  date: Date;
}

const CommentSchema: Schema = new Schema(
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

const Comment: Model<IComment> = model("comment", CommentSchema);

export default Comment;
