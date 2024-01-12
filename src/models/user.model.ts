import { Query, Schema, model } from "mongoose";
import { Iuser } from "../interfaces/user.interface";

const userSchema = new Schema<Iuser>({
     name: {
     type:String, 
    required: [true, "Please tell use"]
},

    age: {
        type: Number,
        required: [true, "please " ]
    },
    email:{
        type: String,
        unique: true,
        required: [true, "Please"],
        lowercase: true,
    },
    photo: String,
    role:{
        type:String,
        enum:["user", "admin"],
        default: "user"
    },
    userStatus: {
        type: String,
        enum: ['active','inactive']
    }
})
//query Middle ware to findout the pre hook 
userSchema.pre(/^find/, function (this: Query<Iuser,Document>, next){
    this.find({
    userStatus : { $eq : "active"}
   
    })
    next()
})
// userSchema.pre("find", function (next){
//     this.find({
//     userStatus : { $eq : "active"}
   
//     })
//     next()
// })

const User = model<Iuser>('User',userSchema)

export default User;