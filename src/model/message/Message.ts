import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
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
      required: true,
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

const Message = mongoose.model("message", MessageSchema);

export default Message;
