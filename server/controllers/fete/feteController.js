import {handleResponse, response} from "../../utils/handleResponse";
import {checkToken} from "../../utils/auth";
import {handleValidationError} from "../../utils/handleErros";
import feteService from "../../services/feteService";

export const getUserFete = async (req,res)=>{
    if(await checkToken(req)){
        const fetesUser = await feteService.getUserFete(req.params.userid)
        response(res,fetesUser.status,fetesUser.response)
    }else {
        let token = handleResponse(400,true,{message : "unauthorized"})
        response(res, token.status, token.response)
    }

}


export const createFete = async (req,res)=>{
    if(await checkToken(req)){
        handleValidationError(req,res)
        const fete = await feteService.createFete(req.body)
        response(res, fete.status, fete.response)
    }else {
        let token = handleResponse(400,true,{message : "unauthorized"})
        response(res, token.status, token.response)
    }
}