import {Router} from "express"
import userRoutes from "./user/userRoutes";
import feteRoutes from "./fete/feteRoutes";

const apiRoutes = new Router()

apiRoutes.use("/user",userRoutes)
apiRoutes.use("/fete",feteRoutes)
export default apiRoutes