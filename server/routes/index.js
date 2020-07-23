import {Router} from "express"
import userRoutes from "./user/userRoutes";
import feteRoutes from "./fete/feteRoutes";
import salleRoutes from "./salle/salleRoutes";
import decoRoutes from "./deco/decoRoutes";

const apiRoutes = new Router()

apiRoutes.use("/user",userRoutes)
apiRoutes.use("/fete",feteRoutes)
apiRoutes.use("/salle",salleRoutes)
apiRoutes.use("/deco",decoRoutes)
export default apiRoutes