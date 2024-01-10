 export interface ITour{
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