import {Router} from "express"

const userRoutes = new Router()

userRoutes.get("/create",(req,res)=>{
    res.status(200).json({
        message : "user"
    })
})

export default userRoutes