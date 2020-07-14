import {validationResult} from "express-validator";

export const handleValidationError = (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
}