import {body} from "express-validator";

export default {
    loginTypes : [
        body('email',"email requis").exists().isEmail().withMessage("format email fausse"),
        body("password","mot de passe requis").exists().isLength({min : 5}).withMessage("password doit etre superiurs a 5")
    ]
}

