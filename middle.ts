import {Request,Response, NextFunction, response } from 'express';
const requestlogger =(req:Request,res: Response, next:NextFunction)=>{
    const timestamp= new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

export default requestlogger;   