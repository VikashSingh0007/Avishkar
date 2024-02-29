const {Schema,model, default: mongoose}=require('mongoose');

const TeamSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true,
        },
        leader : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true,
            // unique : true, changing since leader can have multiple teams
        },
        size : {
            type : Number,
            default : 1,
        },
        acceptedMembers : {
            type:[mongoose.Schema.Types.ObjectId],
            ref:'User'
        },
        pendingMembers : {
            type:[mongoose.Schema.Types.ObjectId],
            ref:'User'
        },
        participatingEvents : {
            type : [String],
        }
    }
)
module.exports = model('Team',TeamSchema)