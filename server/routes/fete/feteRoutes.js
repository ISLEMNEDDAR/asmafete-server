import {Router} from "express"
import * as  feteValidations from "../../validations/feteValidations"
import * as feteController from "../../controllers/fete/feteController";
const feteRoutes = new Router()

feteRoutes.post("/add",feteValidations.validateFete("creation") ,feteController.createFete)
feteRoutes.get("/user/:userid",feteController.getUserFete)
feteRoutes.get("/:feteid/reserver/salle/:salleid",feteController.reserverSalle)
feteRoutes.get("/:feteid/reserver/deco/:decoid",feteController.reserverDeco)
export default feteRoutes