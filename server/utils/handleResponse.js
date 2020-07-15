export const handleResponse = (status,error,data)=>{
    return {
        status : status,
        response : {
            error: error,
            data: data
        }
    }
}

export const response = (res,status,data)=>{
    return res.status(status).json(data)
}