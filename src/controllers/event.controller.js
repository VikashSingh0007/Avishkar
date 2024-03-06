const User = require('../models/user.model');
const Team = require('../models/team.model');
const Event = require('../models/event.model')
const { addUserToDepartment, findUserInDepartment } = require('../helper/eventHelper');
const dc = "DepartmentCordinator";
const fes = "FestivalSecretary";

const createEvent = async (req ,res , next) => {
    const { eventName  , minTeamsize , maxTeamsize } = req.body;
    if(!eventName || !minTeamsize || !maxTeamsize){
        res.statusCode = 400;
        res.json({
            success : false,
            error : "Some Data is MISSING",
            message : "Some Data fields are missing",
        })
        return;
    }
    try{
        const id = req.user._id;
        const user = await User.findOne({_id : id});
        if(!user){
            res.statusCode = 401;
            res.json({
                success : false,
                error : "User does not Exist"
            })
            return;
        }
       
        if(false){
            res.statusCode = 401;
            res.json(
                {
                    success : false,
                    error : "User Does Not Have the Privilage to Create A Event",
                }
            )

            return;
        }
        const event = await Event.create({
            name : eventName,
            // conductingDate : conductingDate,
            maxTeamsize : maxTeamsize,
            minTeamsize : minTeamsize,
            DepartmentCoordinator : [user._id],
        })
        if(!event){
            res.statusCode = 401;
            res.json({
                success : false,
                message : "Could Not Create The Team",
                error : "Team Could Not Be Created",
            });
            return; 
        }
        else{
            res.statusCode = 200;
            res.json(
                {
                    success : true,
                    message : "Event Has Been Created!! You are a Department Cordinator",
                }
            )
            return;
        }

    } 
    catch(e){
        console.log(e);
        res.statusCode = 400;
        res.json(
            {
                success : false,
                message : "Could Not Create the Event",
                error : "Something Went Wrong!!"
            }
        )
        return;
    }
}





const joinEvent = async (req, res , next) => { // called by frontend when joining a team to a event
    const { teamId, eventName } = req.body; 
    const id = req.user._id;
    if(!teamId || !eventName){ // checking if teamId and eventName are missing
        res.statusCode = 400;
        res.json(
            {   error : "teamId and EventName is NULL",
                message : "teamid or event name is missing",
                success : false,
            }
        )
        return;
    }
    try {
        const team = await Team.findOne({_id : teamId})
        const event = await Event.findOne({name : eventName})
        if (!team  || !event ) {
            // case when team or event doesn't exist
            res.statusCode = 404;
            res.json({ error: "not found", message: "team  not found!", success: false });
            return;
        } else if (!event.isOpen) {
            res.statusCode = 400;
            res.json({ error: "bad request", message: "registrations for the event has been closed!", success: false });
        } else if (team.leader != id) {
            // check if the request was made by person other than the leader
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "only team leader can add participation!", success: false });
        } else if (team.size > event.maxTeamsize || team.size < event.minTeamsize) {
            // checking the appropriate size of the team
            res.statusCode = 400;
            res.json({ error: "bad request", message: "team size constraints don't match with the participating team!", success: false });
        } else {
            // we simply add the team Id to the id of the participant
            var flag = false;
            for(let i = 0 ; i < event.particpatingTeams.length ; i++){
                if(event.particpatingTeams[i] == teamId){
                    flag = true;
                }
            }
            if(flag){
                res.statusCode = 400;
                res.json(
                    {
                        error : "Already Registered",
                        message : "Already Registered",
                        success : false
                  
                      }
                )
                return;
            }
            event.particpatingTeams = event.particpatingTeams.filter((id) => {
                return id != teamId
            })

            event.particpatingTeams = [...event.particpatingTeams , teamId];
            console.log(event);
            await event.save();
            res.statusCode = 200;
            res.json({ message: "team participation done!", success: true });
        }
    } catch (error) {
        console.log("error occured in the eventParticipate() controller!");
        next(error);
    }
};

const leaveEvent = async (req, res, next) => {
    const { teamId, eventName } = req.body;
    const id = req.user._id;
    if(!teamId || !eventName){ // checking if teamId and eventName are missing
        res.statusCode = 400;
        res.json(
            {   error : "teamId and EventName is NULL",
                message : "teamid or event name is missing",
                success : false,
            }
        )
        return;
    }
    try {
        const team = await Team.findOne({_id : teamId})
        const event = await Event.findOne({name : eventName})

        if (!team || !event) {
            // case when team doesn't exist
            res.statusCode = 404;
            res.json({ error: "not found", message: "team / event not found!", success: false });
        } else if (!event.isOpen) {
            res.statusCode = 400;
            res.json({ error: "bad request", message: "registrations for the event has been closed!", success: false });
        }
         else if (team.leader !== id) {
            // check if the request was made by person other than the leader
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "only team leader can add participation!", success: false });
        } else {
            //simply remove the team from the particpating event array
            event.particpatingTeams = event.particpatingTeams.filter((participantteamId) => {
                return teamId !== participantteamId;
            })
            res.statusCode = 200;
            res.json({ message: "team unparticipation done!", success: true });
        }
    } catch (error) {
        console.log("error occured in the eventUnparticipate() controller!");
        next(error);
    }
};





module.exports = {
    joinEvent,
    leaveEvent,
    createEvent,
    
}