import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
  {
    message: {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
    author: {
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
  { collection: "conversation" }
);

const Conversation = mongoose.model("conversation", ConversationSchema);

export default Conversation;
