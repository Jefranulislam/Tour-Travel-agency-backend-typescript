/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { tourServices } from "../services/tour.service";

const createTour =async (req: Request,res:Response) => {
    try {
const userData = req.body
const result = await tourServices.createTour(userData);


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
const getAllTour =async (req: Request,res:Response) => {
    try {
const result = await tourServices.getAllTours();

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
const getSingleTour =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await tourServices.getSingleTour(id);

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
const updateTour =async (req: Request,res:Response) => {
    try {
const userData = req.body;
const id = req.params.id;
const result = await tourServices.updateTour(id,userData);


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
const deleteTour =async (req: Request,res:Response) => {
    try {
const id = req.params.id
const result = await tourServices.deleteTour(id);


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

export const tourController ={createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,}