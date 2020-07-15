import {Router} from "express"
import * as  feteValidations from "../../validations/feteValidations"
import * as feteController from "../../controllers/fete/feteController";
const feteRoutes = new Router()

feteRoutes.post("/add",feteValidations.validateFete("creation") ,feteController.createFete)

export default feteRoutes