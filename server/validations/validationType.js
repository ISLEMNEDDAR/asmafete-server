import {body} from "express-validator";

export default {
    loginTypes : [
        body('email',"email requis").exists().isEmail().withMessage("format email fausse"),
        body("password","mot de passe requis").exists().isLength({min : 5}).withMessage("password doit etre superiurs a 5")
    ],
    signupTypes : [
        body('email',"email requis").exists().isEmail().withMessage("format email fausse"),
        body("password","mot de passe requis").exists().isLength({min : 5}).withMessage("password doit etre superiurs a 5"),
        body("nom").exists().isString(),
        body("prenom").exists().isString(),
        body("age").exists().isNumeric(),
        body("sexe").exists().isIn(["H","F"]),
        body("phone").exists(),
        body("wilaya").exists(),
    ]
}

