/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { reviewservice } from "../services/review.service";

const createReview =async (req: Request,res:Response) => {
    try {
const userData = req.body
const result = await reviewservice.createReview(userData);


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
const getAllReviews =async (req: Request,res:Response) => {
    try {
const result = await reviewservice.getAllReviews();

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
const getSingleReview =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await reviewservice.getSingleReview(id);

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
const updateReview =async (req: Request,res:Response) => {
    try {
const userData = req.body;
const id = req.params.id;
const result = await reviewservice.updateReview(id,userData);


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
const deleteReview =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await reviewservice.deleteReview(id);


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

export const reviewController ={
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,}