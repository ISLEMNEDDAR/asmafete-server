import {Router} from "express"
import * as userController from "../../controllers/user/userController";
import * as  userValidation from "../../validations/userValidations"
const userRoutes = new Router()

userRoutes.post("/login",userValidation.validateUser("login") ,userController.login)
userRoutes.post("/signup",userValidation.validateUser("signup"),userController.signup)
export default userRoutes