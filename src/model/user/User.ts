import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    isEmailConfirmed: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    youtubeUrl: {
      type: String,
      required: true,
    },
    channelBornDate: {
      type: Date,
      required: true,
    },
    subscribersQuantity: {
      type: Number,
      required: false,
    },
    meanViewsNumberPerVideo: {
      type: Number,
      required: false,
    },
    meanSubscribersAge: {
      type: Number,
      required: false,
    },
    subscriberMaleSexQuantity: {
      type: Number,
      required: false,
    },
    subscriberFemaleSexQuantity: {
      type: Number,
      required: false,
    },
    meanLikesNumberPerVideo: {
      type: Number,
      required: false,
    },
    meanCommentsNumberPerVideo: {
      type: Number,
      required: false,
    },
    rate: [{ type: Schema.Types.ObjectId, ref: "rate" }],
    companiesInCooperation: [{ type: Schema.Types.ObjectId, ref: "brand" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
  },
  { collection: "user" }
);

const User = mongoose.model("user", UserSchema);

export default User;
