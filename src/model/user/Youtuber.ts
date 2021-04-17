import { model, Schema, Model, Document } from "mongoose";
import { IRate } from "../rate/Rate";
import { IComment } from "../rate/Comment";
import { IBrand } from "../user/Brand";
import { IMessage } from "../message/Message";

export interface IYoutuber extends Document {
  name: string;
  email: string;
  password: string;
  photo?: string;
  isEmailConfirmed: boolean;
  category: string;
  youtubeUrl: string;
  channelBornDate: Date;
  subscribersQuantity?: number;
  meanViewsNumberPerVideo?: number;
  meanSubscribersAge?: number;
  subscriberMaleSexQuantity?: number;
  subscriberFemaleSexQuantity?: number;
  meanLikesNumberPerVideo?: number;
  meanCommentsNumberPerVideo?: number;
  creationDate: Date;
  rates: IRate[];
  comments: IComment[];
  companiesInCooperation: IBrand[];
  messages: IMessage[];
}

const YoutuberSchema: Schema = new Schema(
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
    creationDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    rates: [{ type: Schema.Types.ObjectId, ref: "rate" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    companiesInCooperation: [{ type: Schema.Types.ObjectId, ref: "brand" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "message" }],
  },
  { collection: "youtuber" }
);

const Youtuber: Model<IYoutuber> = model("youtuber", YoutuberSchema);

export default Youtuber;
