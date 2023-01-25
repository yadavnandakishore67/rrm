import APIError from './APIError';

const APIErrorHandler = (error:Error, req:any, res:any, next:any) => {

    if(error instanceof APIError){
        res.status(error.code).json(error.message);
        return;
    }

    res.status(500).json('Something Went Wrong');
}

export default APIErrorHandler;