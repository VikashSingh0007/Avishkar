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

const makeDepartmentalSecretary = async (req,res,next) => {
    const { email } = req.body;
    if(!email){
        res.statusCode = 400;
        res.json({
            error : "Email is Missing",
            message : "Email is Not Present",
            success : false,
        })
        return;
    }
    try{
        const id = req.user._id;
        const tuser = await User.findOne({email : email});
        if(!tuser){
            res.statusCode = 400;
            res.json({
                error : "Target User Does Not Exist",
                message : "Target User Does Not Exist",
                success : false,
            })
            return;
        }
        const user = await User.findOne({_id : id});
        if(!user){
            res.statusCode = 400;
            res.json({
                error : "User Does Not Exist",
                message : "User Does Not Exist",
                success : false,
            })
            return;
        }
        if(user.role != fes){
            res.statusCode = 400;
            res.json({
                error : "User Does Not Have Permission",
                message : "User Does Not Have Permission",
                success : false,
            })
            return;
        }
        tuser.role = dc;
        await tuser.save();
        res.statusCode = 200;
        res.json({
            success : true,
            message : "User has been Upgraded to DC",
        })
        return;
    }
    catch(e){
        console.log(e);
        res.statusCode = 400;
        res.json(
            {
                error : "Something Went Wrong",
                message : "Something Went Wrong",
                success : false,
            }
        )
        return;
    }
}

const addSecretaryToEvent = async (req,res) => {
    const { email  , eventName } = req.body;
    if(!email || !eventName){
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
        const tuser = await User.findOne({
            email : email
        });
        if(!tuser){
            res.statusCode = 400;
            res.json({
                error : "Target User Does Not Exist",
                message : "Target User Does Not Exist",
                success : false,
            })
            return;
        }
        const user = await User.findOne({
            _id : id
        })
        if(!user){
            res.statusCode = 400;
            res.json({
                error : "User Does Not Exist",
                message : "User Does Not Exist",
                success : false,
            })
            return;
        }
        if(user.role != dc && user.role != fes){
            res.statusCode = 400;
            res.json(
                {
                    error : "User Does Not Have Permission",
                    message : "User Does Not Have Permission",
                    success : false,
                }
            )
            return;
        }
        const event = await Event.findOne({
            name : eventName
        })
        if(!eventName){
            res.statusCode = 400;
            res.json({
                error : "Event Does Not Exist",
                message : "No Event By This Name Exist",
                success : false,
            })
            return;
        }
        if(user.role == fes){
            event.DepartmentCoordinator = addUserToDepartment(event.DepartmentCoordinator , tuser._id); 
            await event.save();
            res.statusCode = 200;
            res.json(
                {
                    message : "Department Cordinator Created SuccesFully",
                    success : true,
                }
            )
            return;
        }
        if(user.role == dc && findUserInDepartment(event.DepartmentCoordinator , user._id)){
            event.DepartmentCoordinator = addUserToDepartment(event.DepartmentCoordinator , tuser._id); 
            await event.save();
            res.statusCode = 200;
            res.json(
                {
                    message : "Department Cordinator Created SuccesFully",
                    success : true,
                }
            )
            return;
        }
        else{
            res.statusCode = 400;
            res.json(
                {
                    error : "User Does Not Have Permission",
                    message : "User Does Not Have Permission",
                    success : false,
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
                error : "Something Went Wrong",
                message : "Something Went Wrong",
                success : false,
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
        } else if (team.leader !== id) {
            // check if the request was made by person other than the leader
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "only team leader can add participation!", success: false });
        } else if (team.size > event.maxTeamsize || team.size < event.minTeamsize) {
            // checking the appropriate size of the team
            res.statusCode = 400;
            res.json({ error: "bad request", message: "team size constraints don't match with the participating team!", success: false });
        } else {
            // we simply add the team Id to the id of the participant
            event.particpatingTeams = [...event.particpatingTeams , teamId];
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

const getAllTeamsParticipatingInEvent = async (req, res, next) => {
    // for a user with userId returns the team which is participating in the event with eventId
    // this is publicc API NO security needed on this point
    const eventName = req.body.eventName;
    if(!eventName){
        res.statusCode = 400;
        res.json({
            error : "Event Name is Empty",
            success : false,
            message : "Event Name cannot be Empty",
        })
        return;
    }
    try {
        
        const event = await Event.findOne({eventName : eventName});
        if(!event){
            res.statusCode = 400;
            res.json({
                error : "Event Not Found",
                success : false,
                message : "Event Does Not Exist",
            })
            return;
        }
        const participatingTeam = await Promise.all(event.particpatingTeams(async (participantteamId) => {
            const parTeam = await Team.findOne({_id : participantteamId});
            return {
                name : parTeam.name,
                leader : parTeam.leader,
            }
        }));
        res.statusCode = 200;
        res.json({ participatingTeam : participatingTeam, success: true });
        return;
    } catch (error) {
        res.statusCode = 404;
        res.json({
            error : "something went wrong while participating",
            success : false,
            message : "something went wrong",
        })
        console.log("error occured in the eventParticipatingTeam() controller!");
        next(error);
    }
};


const verifyPayment = async (req,res) => { // to be called by DC or FS after fee payment verification
    const { email } = req.body; // id of the user 
    // !!!!!!!!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!
    /*
        here we need  a mechanism to identify that only DC or FS is calling
        negligence may lead to serious security issues
    */
    if(!email){
        res.statusCode = 400;
        res.json({
            error : "User Email cannot be empty",
            success : false,
            message : "User Email cannot be NULL"
        })
        return;
    }
    try{
        const tuser = await User.findOne({
          email : email
        })
        if(!tuser){
            res.statusCode = 400;
            res.json({
                error : "user does not exist",
                success : false,
                message : "User Not Found"
            })
            return;
        }
        const id = req.user._id;
        const user = await User.findOne({
            _id : id,
        })
        if(!user){
            res.statusCode = 400;
            res.json({
                error : "user does not exist",
                success : false,
                message : "User Not Found"
            })
            return;
        }
        if(user.role != fes){
            res.statusCode = 400;
            res.json(
                {
                    error : "Only FS can check payment",
                    success : false,
                    message : "Only FS can check payment",
                }
            )
            return;
        }
        tuser.isFeePaid = true;
        await tuser.save();
        res.statusCode = 200;
        res.json({
            success : true,
            message : "User has Paid The Fee and Verified The Payment"
        })
        return;
    }
    catch(e){
        console.log(e);
        res.statusCode = 400;
        res.json({
            success : false,
            message : "something went wrong in fee verification"
        })
    }

}

const getAllNotFeePaid = async (req,res) => {
    const id = req.user._id;
    try{
        const user = await User.findOne({
            _id : id,
        })
        if(!user){
            res.statusCode = 400;
            res.json({
                error : "user does not exist",
                success : false,
                message : "User Not Found"
            })
            return;
        }

        if(user.role != fes){
            res.statusCode = 400;
            res.json(
                {
                    error : "Only FS can see payment history",
                    success : false,
                    message : "Only FS can see payment history",
                }
            )
            return;
        }

        const data = await User.find({isFeePaid : false} , {email : 1 , name : 1 , mobile : 1});
        res.statusCode = 200;
        res.json(
            {
                success : true,
                data : data
            }
        )
        return;
    }
    catch(e){
        console.log(e);
        res.statusCode = 400;
        res.json({
            success : false,
            error : "Something Went Wrong",
            message : "Something Went Wrong",
        })
        return;
    }
}


module.exports = {
    joinEvent,
    leaveEvent,
    getAllTeamsParticipatingInEvent,
    createEvent,
    addSecretaryToEvent,
    makeDepartmentalSecretary,
    verifyPayment,
    getAllNotFeePaid,
}