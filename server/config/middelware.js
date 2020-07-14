import bodyParser from 'body-parser'
import morgan from 'morgan'
const exphbs = require('express-handlebars');
import helmet from "helmet"
import apiRoutes from "../routes";
import passport from 'passport'
const setHeader = (req,res,next)=>{
    console.log("use this middlware")
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'POST,GET,OPTIONS')
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization")
    if(req.method === "OPTIONS"){
        return res.sendStatus(200)
    }
    next()
}

export default (app)=>{
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(morgan('dev'));
    app.use(helmet())
    app.use((req,res,next)=>{
        setHeader(req,res,next)
    })
    app.use(passport.initialize())
    app.use('/api',apiRoutes)
}