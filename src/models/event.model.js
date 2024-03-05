const {Schema,model, default: mongoose} = require('mongoose');

const eventSchema = new Schema(
    {
        name : {
            required : true,
            type : String,
            unique : true,
        },
        particpatingTeams : [mongoose.Schema.Types.ObjectId],
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
        DepartmentCoordinator : [
            mongoose.Schema.Types.ObjectId
        ]

    },{timestamps:true}
)

module.exports = model('Event',eventSchema)