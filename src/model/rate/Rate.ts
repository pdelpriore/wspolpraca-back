import { model, Schema, Model, Document } from "mongoose";
import { IYoutuber } from "../user/Youtuber";
import { IBrand } from "../user/Brand";

export interface IRate extends Document {
  user: IYoutuber | IBrand;
  value: number;
}

const RateSchema: Schema = new Schema(
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

const Rate: Model<IRate> = model("rate", RateSchema);

export default Rate;
