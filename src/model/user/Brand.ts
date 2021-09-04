import { model, Schema, Model, Document } from "mongoose";
import { IRate } from "../rate/Rate";
import { IComment } from "../rate/Comment";
import { IYoutuber } from "../user/Youtuber";
import { IMessage } from "../message/Message";

type comment = {
  commentator: IYoutuber;
  comment: IComment;
  rate: IRate;
};

export interface IBrand extends Document {
  userType: string;
  name: string;
  email: string;
  password?: string;
  logo?: string;
  isEmailConfirmed: boolean;
  category?: string;
  siteUrl?: string;
  brandBornDate?: Date;
  creationDate: Date;
  comments?: comment[];
  youtubersInCooperation?: IYoutuber[];
  messages?: IMessage[];
}

const BrandSchema: Schema = new Schema(
  {
    userType: {
      type: String,
      required: true,
    },
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
      required: false,
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
    comments: [
      {
        commentator: { type: Schema.Types.ObjectId, ref: "youtuber" },
        comment: { type: Schema.Types.ObjectId, ref: "comment" },
        rate: { type: Schema.Types.ObjectId, ref: "rate" },
      },
    ],
    youtubersInCooperation: [{ type: Schema.Types.ObjectId, ref: "youtuber" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
  },
  { collection: "brand" }
);

const Brand: Model<IBrand> = model("brand", BrandSchema);

export default Brand;
