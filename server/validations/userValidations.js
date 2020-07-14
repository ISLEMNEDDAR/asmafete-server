import {body} from "express-validator";
import validationType from "./validationType"

export const validateUser = (methode) =>{
    switch (methode) {
        case "login" : {
            return validationType.loginTypes
        }
    }
}
