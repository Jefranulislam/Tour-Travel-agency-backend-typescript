import {  Schema, model } from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>({
    review: {
        type: String,
        required: [true, 'Please provide a review'],
      },
      rating: {
        type: Number,
        required: [true, 'Please provide a rating'],
      },
      createAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
      tour: {
        type: Schema.Types.ObjectId,
        ref: 'Tour', // Assuming 'Tour' is the name of your Tour model
        required: [true, 'Please provide the tour reference'],
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the name of your User model
        required: [true, 'Please provide the user reference'],
      },
})

const Review = model<IReview>('Review',reviewSchema)

export default Review;