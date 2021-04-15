import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BrandSchema = new Schema(
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
    logo: {
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
    siteUrl: {
      type: String,
      required: true,
    },
    brandBornDate: {
      type: Date,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    rates: [{ type: Schema.Types.ObjectId, ref: "rate" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    youtubersInCooperation: [{ type: Schema.Types.ObjectId, ref: "youtuber" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
  },
  { collection: "brand" }
);

const Brand = mongoose.model("brand", BrandSchema);

export default Brand;
