import Decoration from "../models/Deco";
import {handleResponse} from "../utils/handleResponse";

export default class decoService {

    static async getAllNotReserved(){
        const deco = await Decoration.find({reserved : false}).then(deco => deco)
        return handleResponse(200,false,{
            deco : deco
        })
    }

}