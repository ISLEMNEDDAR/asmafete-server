import mongoose , {Schema} from "mongoose";

const DecoSchema = new Schema({
    id : {
        type : String,
        required : true
    },
    prix : {
        type : Number,
        required: true
    },
    name :{
        type : String,
        required : true
    },
    reserved : {
        type : Boolean,
        default : false
    },
    fete : {
        type : Schema.Types.ObjectId,
        ref : "Fete"
    }
})

export default mongoose.model('Decoration',DecoSchema)