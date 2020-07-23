import mongoose,{Schema} from "mongoose";

const SalleSchema = new Schema({
    salle_id :{
        type : Number,
        required : true
    },
    prix : {
        type : Number,
        required: true
    },
    name: {
        type : String,
        required : true,
    },
    invite : {
        type : Number,
        required : true,
    },
    Wilaya : {
        type : String,
        require : true
    },
    commune : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    reserve : {
        type : Boolean,
        default : false
    },
    fete : {
        type : Schema.Types.ObjectId,
        ref : 'Fete'
    },
})

export default mongoose.model('Salle',SalleSchema)