import { model, Schema, Model, Document } from "mongoose";
import { IYoutuber } from "../user/Youtuber";
import { IBrand } from "../user/Brand";
import { IConversation } from "../message/Conversation";

export interface IMessage extends Document {
  youtuber: IYoutuber;
  brand: IBrand;
  isRead?: boolean;
  date: Date;
  conversations?: IConversation[];
}

const MessageSchema: Schema = new Schema(
  {
    youtuber: {
      type: Schema.Types.ObjectId,
      ref: "youtuber",
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
    },
    isRead: {
      type: Boolean,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    conversations: [{ type: Schema.Types.ObjectId, ref: "conversation" }],
  },
  { collection: "message" }
);

const Message: Model<IMessage> = model("message", MessageSchema);

export default Message;
