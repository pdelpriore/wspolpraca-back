import { model, Schema, Model, Document } from "mongoose";
import { IYoutuber } from "../user/Youtuber";
import { IBrand } from "../user/Brand";
import { IMessage } from "../message/Message";

export interface IConversation extends Document {
  message: IMessage;
  author: IYoutuber | IBrand;
  content: string;
  date: Date;
}

const ConversationSchema: Schema = new Schema(
  {
    message: {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
    authorType: {
      type: String,
      required: true,
      enum: ["youtuber", "brand"],
    },
    author: {
      type: Schema.Types.ObjectId,
      refPath: "authorType",
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
  { collection: "conversation" }
);

const Conversation: Model<IConversation> = model(
  "conversation",
  ConversationSchema
);

export default Conversation;
