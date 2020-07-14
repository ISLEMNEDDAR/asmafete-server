export const handleResponse = (status,error,data)=>{
    return {
        status : status,
        response : {
            error: error,
            data: data
        }
    }
}