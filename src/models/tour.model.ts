import {  Schema, model } from "mongoose";
import { ITModel, ITour, ITourMethods } from "../interfaces/tour.interface";
import slugify from "slugify";

const tourSchema = new Schema<ITour,ITModel,ITourMethods>({
    name: {
        type: String,
        required: [true, "Please provide a name for the tour"],
      },
      durationHours: {
        type: Number,
        required: [true, "Please provide the duration in hours"],
      },
      ratingAverage: {
        type: Number,
        required: true,
        default: 4.5,
      },
      ratingQuantity: {
        type: Number,
        required: true,
        default: 0,
      },
      price: {
        type: Number,
        required: [true, "Please provide the price"],
      },
      imageCover: {
        type: String,
        required: [true, "Please provide the cover image"],
      },
      images: {
        type: [String],
        required: true,
      },
      createAt:[ {
        type: Date,
        required: true,
        default: Date.now(),
      }],
      stateDates: {
        type: [Date],
        required: true,
      },
      startLocation: {
        type: String,
        required: [true, "Please provide the start location"],
      },
      locations: {
        type: [String],
        required: true,
      },
      slug: {
        type: String,
      },
} ,{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
} )


tourSchema.pre('save', function(next){
  this.slug = slugify(this.name, {lower: true})
  next()
})

tourSchema.virtual("durationDays").get(function () {
  return this.durationHours/24
})

tourSchema.methods.getNextNearestDataAndEndDate = function() : {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
}
  {
  const today = new Date()
  const futureDates = this.stateDates.filter((startDate : Date)=>{
    return startDate > today
  } )


  futureDates.sort((a: Date , b: Date)=> a.getTime()-b.getTime())
const nearestStartDate = futureDates[0] 
const estimatedEndDate = new Date( nearestStartDate.getTime()+ this.durationHours*60*60*1000)

return {
 nearestStartDate, estimatedEndDate
}
  
}

tourSchema.virtual("reviews",  { 
  ref: "Review",
  foreignField : 'tour',
  localField: "_id"
})


const Tour = model<ITour>('Tour',tourSchema)

export default Tour;