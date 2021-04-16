import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RateSchema = new Schema(
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
    value: {
      type: Number,
      required: true,
    },
  },
  { collection: "rate" }
);

const Rate = mongoose.model("rate", RateSchema);

export default Rate;
