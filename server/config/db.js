import devConfig from "./configs";
import mongoose from "mongoose"
export default async ()=>{
    await mongoose.connect(devConfig.DB_URL)
        .then(()=>{
            console.log('success complete')
        })
        .catch(err =>{
            console.log(err)
        })
}

