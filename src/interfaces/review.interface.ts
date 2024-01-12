import  { Model, Schema } from "mongoose";

export interface IReview{
    review : string,
    rating: number,
    createAt: Date
    tour: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId,
}


export interface IReviewModel extends Model<IReview>{
   calcAverageRating(tourId : Schema.Types.ObjectId): Promise<void>
}

