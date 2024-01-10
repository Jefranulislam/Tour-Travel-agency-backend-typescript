import { Schema } from "mongoose";

export interface IReview{
    review : string,
    rating: number,
    createAt: Date
    tour: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId,
}