import salleService from "../../services/salleService";
import {response} from "../../utils/handleResponse";
import decoService from "../../services/decoService";


export const getNotReservedDeco = async (req,res)=>{
    const deco = await decoService.getAllNotReserved()
    response(res,deco.status,deco.response)
}
