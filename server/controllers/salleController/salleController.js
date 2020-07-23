import salleService from "../../services/salleService";
import {response} from "../../utils/handleResponse";

export const getNotReservedSalle = async (req,res)=>{
    const salles = await salleService.getAllNotReserved()
    response(res,salles.status,salles.response)
}