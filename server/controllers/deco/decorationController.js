import salleService from "../../services/salleService";
import {response} from "../../utils/handleResponse";


export const getNotReservedDeco = async (req,res)=>{
    const deco = await decoService.getAllNotReserved()
    response(res,deco.status,deco.response)
}
