import {validationResult} from "express-validator";

export const handleValidationError = (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("errors in")
        console.log(errors)
        return { iserror : true,error : errors}
    }
    return { iserror : false,error : errors}
}