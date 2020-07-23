import {Router} from "express"
import * as salleController from "../../controllers/salleController/salleController";
const salleRoutes = new Router()

salleRoutes.get("/notreserved",salleController.getNotReservedSalle)


export default salleRoutes