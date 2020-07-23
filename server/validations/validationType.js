import {body} from "express-validator";
import moment from "moment"
import arrays from "../constante/arrays";


const validateDate = (value)=>{
    return moment(value, 'DD-MM-YYYY',true).isValid()
}

const validateHeursFete = (item) =>{
    if (Array.isArray(item) && item.length>0 ){
        return item.every(elem=>arrays.heurs_fete.includes(elem))
    }

}

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
        body("sexe").exists().isIn(["h","f"]),
        body("phone").exists().custom((value)=>{
            return /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(value)
        }).withMessage("phone format invalid"),
        body("wilaya").exists().isString(),
    ],
    creationFeteTypes :[
        body("id_user").exists(),
        body("wilaya").exists().isString(),
        body("type").exists().isIn(arrays.type_fete),
        body("date").exists().custom(value=>validateDate(value)).withMessage("date is invlid"),
        body("nombre_invite").exists().isNumeric(),
        body("heurs_fete").exists().custom(item=>validateHeursFete(item)),
    ]
}

