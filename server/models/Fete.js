import mongoose,{Schema} from "mongoose"

const FeteSchema = new Schema({
    id_user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    wilaya:{
        type : String,
        required: true
    },
    type : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },

    nombre_invite : {
        type : String,
        required : true
    },
    heurs_fete : [{
        type : String,
        required : true
    }],
    salle : {
        type : Schema.Types.ObjectId,
        ref : 'Salle'
    },
    deco : {
        type : Schema.Types.ObjectId,
        ref : 'Deco'
    },
},{
    timestamps : true
})

export default mongoose.model('Fete',FeteSchema)