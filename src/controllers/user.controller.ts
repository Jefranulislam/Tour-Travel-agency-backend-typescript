/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "../services/user.service";

const createUser =async (req: Request,res:Response) => {
    try {
const userData = req.body
const result = await userServices.createUser(userData);


res.status(201).json({
    status: 'sucesss',
    message: "user Created",
    data:result,
})
    } catch (error : any ) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: error.message || "somtheing"
        })
    }
}
const getAllUser =async (req: Request,res:Response) => {
    try {
const result = await userServices.getAllUsers();

res.status(200).json({
    status: 'sucesss',
    message: "user fetch sucnessfully",
    data:result,
})
    } catch (error : any ) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: error.message || "somtheing"
        })
    }
}
const getSingleUser =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await userServices.getSingleUser(id);

res.status(200).json({
    status: 'sucesss',
    message: "user single user fetch ",
    data:result,
})
    } catch (error : any ) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: error.message || "somtheing"
        })
    }
}
const updateUser =async (req: Request,res:Response) => {
    try {
const userData = req.body;
const id = req.params.id;
const result = await userServices.updateUser(id,userData);


res.status(200).json({
    status: 'sucesss',
    message: "user updaetd sucessfully",
    data:result,
})
    } catch (error : any ) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: error.message || "somtheing"
        })
    }
}
const deleteUser =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await userServices.deleteUser(id);


res.status(200).json({
    status: 'sucesss',
    message: "user deleted",
    data:result,
})
    } catch (error : any ) {
        console.log(error);
        res.status(500).json({
            status:"fail",
            message: error.message || "somtheing"
        })
    }
}

export const userController ={createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,}