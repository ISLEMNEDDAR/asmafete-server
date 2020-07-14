import {Router} from "express"
import userRoutes from "./user/user";

const apiRoutes = new Router()

apiRoutes.use("/user",userRoutes)

export default apiRoutes