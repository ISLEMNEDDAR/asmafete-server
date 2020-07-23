import {handleResponse, response} from "../../utils/handleResponse";
import {checkToken} from "../../utils/auth";
import {handleValidationError} from "../../utils/handleErros";
import feteService from "../../services/feteService";

export let reserverDeco = async (req,res) => {
    if(await checkToken(req)){
        const decoReserve = await feteService.reserverDeco(req.params.feteid,req.params.decoid)
        response(res,decoReserve.status,decoReserve.response)
    }else {
        let token = handleResponse(400,true,{message : "unauthorized"})
        response(res, token.status, token.response)
    }
};


export const reserverSalle = async (req,res)=>{
    if(await checkToken(req)){
        const salleReserve = await feteService.reserverSalle(req.params.feteid,req.params.salleid)
        response(res,salleReserve.status,salleReserve.response)
    }else {
        let token = handleResponse(400,true,{message : "unauthorized"})
        response(res, token.status, token.response)
    }
}


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