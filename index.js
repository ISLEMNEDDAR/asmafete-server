import express from 'express'; // to handle the differnet http request put,get,post
import dbConfig from './server/config/db';
import middlware from "./server/config/middelware";

const app = express();
/*
    middlware
 */
middlware(app);
/*
    PORT
 */
const PORT = process.env.port || 3600;

var server = async ()=>{
    await dbConfig()
    app.listen(PORT,err =>{
        if(err){
            console.error(err)
        }else{
            console.log('App listen to port '+PORT)
        }
    });
}
server().then(r => console.log("connected"))