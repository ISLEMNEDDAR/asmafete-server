import mongoose,{Schema} from "mongoose"

const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password:{
        type : String,
        required: true
    }
    /*nom : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    sexe : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    wilaya : {
        type : String,
        required : true
    },*/
},{
    timestamps : true
})

export default mongoose.model('User',UserSchema)