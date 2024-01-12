import { Model } from "mongoose"

  interface ITour{
    name: string,
    durationHours: number,
    ratingAverage: number,
    ratingQuantity: number,
    price: number,
    imageCover: string,
    images: string[],
    createAt: Date,
    stateDates: Date[]
    startLocation: string,
    locations: string[]
    slug: string,
  }


  interface ITourMethods { 
    getNextNearestDataAndEndDate():{
      nearestStartDate: Date | null
      estimatedEndDate: Date | null
    }
  }


  
  // eslint-disable-next-line @typescript-eslint/ban-types
  type ITModel = Model<ITour,{}, ITourMethods>

  export {ITour, ITModel, ITourMethods}