import {body} from "express-validator";
import validationType from "./validationType"

export const validateFete = (methode) =>{
    switch (methode) {
        case "creation" : {
            return validationType.creationFeteTypes
        }
    }
}
