import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RateSchema = new Schema(
  {
    user: {
      youtuber: { type: Schema.Types.ObjectId, ref: "youtuber" },
      brand: { type: Schema.Types.ObjectId, ref: "brand" },
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
