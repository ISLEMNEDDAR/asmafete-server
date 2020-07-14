import {Router} from "express"
import userRoutes from "./user/userRoutes";

const apiRoutes = new Router()

apiRoutes.use("/user",userRoutes)

export default apiRoutes