
class APIError {
    code: number;
    message:string;

    constructor(code:number, message:string) {
        this.code = code;
        this.message =  message;
    }

    static badRequest(message:string){
        return new APIError(400, message);
    }

    static internalServerError(message:string){
        return new APIError(500, message);
    }

    static unAuthorizedUser(message:string){
        return new APIError(401, message);
    }

    static pageNotFound(message:string){
        return new APIError(404, message)
    }

}

export default APIError;