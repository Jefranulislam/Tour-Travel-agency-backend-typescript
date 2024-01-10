import { Iuser } from "../interfaces/user.interface";
import User from "../models/user.model";

const createUser = async (userData: Iuser) : Promise<Iuser>=>{
const result = await User.create(userData);
return result;
}

const getAllUsers = async() : Promise<Iuser[]> =>{
    const result = await User.find({
        userStatus: 'active'
    })
    return result
}


const getSingleUser = async (id:string) :  Promise<Iuser | null> =>{
const result = await User.findById(id);
return result;
}

const  updateUser =async (id:string, userData: Iuser) : Promise<Iuser | null>=> {
    const result = await User.findByIdAndUpdate(id,userData, {
        new: true,
        runValidators:true,
    })
    return result
}


const deleteUser = async (id: string): Promise<Iuser | null> =>{
  const result =  await User.findByIdAndDelete(id)
  return result;
}

export const userServices ={
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}