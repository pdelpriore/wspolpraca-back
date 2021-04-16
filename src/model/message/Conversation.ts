import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
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

const Conversation = mongoose.model("conversation", ConversationSchema);

export default Conversation;
