import {  Schema, model } from "mongoose";
import { Itour } from "../interfaces/tour.interface";

const tourSchema = new Schema<Itour>({
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
})

const Tour = model<Itour>('Tour',tourSchema)

export default Tour;