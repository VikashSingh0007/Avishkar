const {Schema,model, default: mongoose} = require('mongoose');

const eventSchema = new Schema(
    {
        name : {
            required : true,
            type : String,
            unique : true,
        },
        particpatingTeams : [{type:mongoose.Schema.Types.ObjectId,ref:"Team"}],
        conductingDate : {
            // required : true,
            type : Date,
        },
        maxTeamsize : {
            type : Number,
            default : 1,
        },
        minTeamsize : {
            type : Number,
            default : 1,
        },
        isOpen : {
            type : Boolean,
            default : true,
        },
        DepartmentCoordinator : [{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
       
        ],
        department : {
            type : String,
            required : true
        }

    },{timestamps:true}
)

module.exports = model('Event',eventSchema)