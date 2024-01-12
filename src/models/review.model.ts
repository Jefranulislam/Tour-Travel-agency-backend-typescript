import  {  Schema, model } from "mongoose";
import { IReview, IReviewModel } from "../interfaces/review.interface";
import Tour from "./tour.model";

const reviewSchema = new Schema<IReview , IReviewModel>({
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

reviewSchema.index({tour:1, user:1}, {unique:true})

reviewSchema.statics.calcAverageRating = async function (tourId: Schema.Types.ObjectId){
  const stats = await this.aggregate([{
    $match: {tour:tourId}
  },
{
$group :{
  _id : '$tour',
  numberOfRatings : { $sum : 1},
  avgRating :{ $avg: "$rating"}
}
}
])
if(stats.length >0){
  await Tour.findByIdAndUpdate(tourId,{
    ratingAverage : stats[0].numberOfRatings,
    ratingQuantiy: stats[0].avgRating,

  })
} else{
  Tour.findByIdAndUpdate(tourId,{
    ratingAverage: 0,
    ratingQuantity:0,
  })
}
}


const Review = model<IReview , IReviewModel>('Review',reviewSchema)

export default Review;