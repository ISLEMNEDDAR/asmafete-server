import {Router} from "express"
import * as decoController from "../../controllers/deco/decorationController";
const decoRoutes = new Router()

decoRoutes.get("/notreserved",decoController.getNotReservedDeco)

export default decoRoutes