const { addUserToDepartment, findUserInDepartment } = require('../helper/eventHelper');
const teamModel = require('../models/team.model');
const Team =  require('../models/team.model')
const User = require('../models/user.model')

const updateResume = async (req,res,next) => {
    const id = req.user._id;
    const { resumeLink }= req.body
    try{
        if(!id){
            res.statusCode = 400;
            res.json({
                success : false,
                message : "user not logged in!!",
                error : "user not loggerd in!!"
            })
            return;
        }
        if(!resumeLink){
            res.statusCode = 403;
            res.json({
                success : false,
                message : "No Link Provided",
                error : "No Resume Link was Provided",
            })
            return;
        }
        const user = await User.findOne({_id : id});
        if(!user){
            res.statusCode = 404;
            res.json(
                {
                    success : false,
                    error : "something went wrong",
                    message : "something went wrong"
                }
            )
            return;
        }
        console.log(resumeLink)
        user.resumeLink = resumeLink;
        console.log(user);
        await user.save();

        res.statusCode = 200;
        res.json({
            success : true,
            message : "Resume Successfuly Updated",
            error : "SuccessFully Updated the User's Resume",
        })
        return;
    }
    catch(e){
        console.log(e);
        res.statusCode = 401;
        res.json({
            success : false,
            message : "something went wrong",
        })
        return;
    }
    
}

const createTeam = async (req, res, next) => {
    const email = req.user.email; // get credentials
    const user = await User.findOne({email}); // get user
    
    console.log(user.email);
    if(!user){ //validate user
        res.statusCode = 400;
        res.json({
            error : 'user does not exist',
            message : 'something went wrong user cannot be created',
            success : false,
        })
        return;
    }
    const name = req.body.teamName;
    var size = req.body.teamSize;
    if(!name){
        res.statusCode = 401;
        res.json({
            error : "Name is Missing",
            success : false,
            message : "Name Cannot Be Missing"
        })
        return;
    }
    const team = await Team.findOne({name : name});
    if(team){
        res.statusCode = 402;
        res.json(
            {
                error : "Team Already Exists",
                message : "Team Name Is Already Taken",
                success : false
            }
        )
        return;
    }
    // validate name and size
    if(!size){
        size = 1;
    }
   
    // user can only create/join team if the fee is paid
    if (!user.isFeePaid) {
        res.statusCode = 403;
        res.json({
            error: "fee payment issue",
            message: "cannot create team until participation fee is paid!",
            success: false,
        });
        return;
    } else {
        try {
            // create the Team
            const team = await Team.create({
                name,
                size,
                acceptedMembers : [user._id],
                pendingMembers : [],
                participatingEvents : [],
                leader : user._id 
            })
            // just add team to the participating array of the user
            user.participatingTeam = [...user.participatingTeam , team._id];
            await user.save();
            res.statusCode = 200;
            res.json({ message: "team created!", success: true });
            return;
        } catch (error) {
            console.log("error occured in the createTeam() controller!");
            next(error);
            return;
        }
    }
};

// this endpoint needs to be tested thoroughly inorder to ensure security
const deleteTeam = async (req, res, next) => {
    console.log('initating delte Team');
    const { teamId } = req.body; 
    const id = req.user._id;
    console.log(teamId);
    console.log(id);
    if(!teamId){
        res.statusCode = 400;
        res.json(
            {
                error : "Empty TeamId",
                message : "Team Id  cannot be Empty",
                success : false,
            }
        )
        return;
    }
    try {
        const team = await Team.findOne({_id : teamId});
        const user = await User.findOne({_id : id})
        console.log(team);
        console.log(user);
        if (!team || !user) {
            res.statusCode = 404;
            res.json({ error: "not found", message: "team or user was not found!", success: false });
        } else if (team.leader != id) {
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "not authorised! only leader can delete a team!", success: false });
        } else {
            // delete all sent invitation
            team.pendingMembers.forEach(async (memberId)=>{
                const teamMember = await User.findOne({_id : memberId});
                teamMember.pendingTeam = teamMember.pendingTeam.filter((pendingTeamId) => {
                    return pendingTeamId != teamId;
                })
                await teamMember.save();
            })
            // delete all accepted invitation
            team.acceptedMembers.forEach(async (memberId)=>{
                const teamMember = await User.findOne({_id : memberId});
                teamMember.participatingTeam = teamMember.participatingTeam.filter((pendingTeamId) => {
                    return pendingTeamId != teamId;
                })
                await teamMember.save();
            })
            await Team.deleteOne({
                _id : teamId
            })
            res.statusCode = 200;
            res.json({ message: "team removed!", success: true });
        }
    } catch (error) {
        console.log("error occured in the removeTeam() controller!");
        next(error);
    }
};

// remove this endpoint once all team names are locked  !!! IMPORTANT SECURITY (if endpoint exist after event things may go wrong)
const updateTeam = async (req , res , next) => {
    const { teamId, teamName } = req.body;
    const id = req.user._id;
    if(!teamId || !teamName){ //check if teamid or name is missing
        res.statusCode = 400;
        res.json({
            error : "Teamid or Name is Missing",
            success : false,
            message : "Team Id Or Team Namme Cannot be NULL",
        })
        return;
    }
    try {
        const team = await Team.findOne({ //find the team whose name need's to be updated
           _id : teamId 
        })
        const teamByName = await Team.findOne( //check if the team name is already taken
            {
                name : teamName,
            }
        )
        if (!team) {
            // case when team doesn't exists
            res.statusCode = 404;
            res.json({ error: "team not found!", message: "team not found!", success: false });
        } 
        else if(teamByName){ // case when team Name is already taken
            res.statusCode = 400;
            res.json({
                error : "Team Name is Already Taken",
                message  : "team name is taken",
                success : false,
            })
        }
        else if (team.leader != id) {
            // case when another person than leader tries to update details
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "not authorised! only leader can update a team!", success: false });
        } else {
            // update name and flush the change
            team.name = teamName;
            await team.save();

            res.statusCode = 200;
            res.json({ message: "team updated!", success: true });
        }
    } catch (error) {
        console.log("error occured in the updateTeam() controller!");
        next(error);
    }
};

const sendTeamInvitation = async (req, res, next) => {
    const { teamId, email } = req.body; // username is of user to be invited
    // id is of the user inviting i.e the leader of the team
    const id = req.user._id;
    try {
        const targetMember = await User.findOne({email : email});
        const team = await Team.findOne({_id : teamId});
    
        if (!team || !targetMember) {
            // case when team or user doesn't exist
            res.statusCode = 404;
            res.json({ error: "not found", message: "user / team not found!", success: false });
        } else if (team.leader != id) {
            // check if the person inviting is leader of the team
            res.statusCode = 401;
            res.json({ error: "unauthorized", message: "not authorised! only leader can send invite to a player!", success: false });
        } else {
            const sendableInvites = team.size - team.pendingMembers.length - team.acceptedMembers.length;
            // check if it is possible to send invites
            if(sendableInvites <= 0){
                res.statusCode = 400;
                res.json({message : "Team is Already Full" , success : false})
            }
            else{
                // add team to pending of invited member
                targetMember.pendingTeam = [...targetMember.pendingTeam , teamId];
                // add invited team to pending member
                team.pendingMembers = [...team.pendingMembers , targetMember._id];
                //flush
                await team.save();
                await targetMember.save();
                res.statusCode = 200;
                res.json({ message: "invite sent!", success: true });
            }
            
        }
    } catch (error) {
        console.log("error occured in the sendInviteToUser() controller!");
        next(error);
    }
};

const acceptOrRejectInvite = async (req , res , next) => {
    const { teamId, status } = req.body;
    const id = req.user._id;
    if(!teamId || !status){ // in case id or status are incorrectly given
        res.statusCode = 400;
        res.json({
            error : "missing teamId or status",
            message : "teamId or Status is Missing",
            success : false,
        })
        return;
    }
    try {
        // const user = await User.findOne({_id : id});
        const teamuser = await User.findOne({_id : id});
        // if(!user){ // if the inviting user does not exist
        //     res.statusCode = 400;
        //     res.json({
        //         error : 'inviting user does not exist',
        //         message : 'inviting user does not existing'
        //     })
        //     return;
        // }
        if(!teamuser){ // if the user to be invited does not exist
            res.statusCode = 400;
            res.json({
                error : 'couldnt find the user',
                message : 'user does not exist',
            })
            return;
        }
        // only a paid user can create/join a team
        if (!teamuser.isFeePaid) { //if there is a fee payment issue
            res.statusCode = 400;
            res.json({
                error: "fee payment issue",
                message: "cannot participate or invite team until participation fee is paid!",
                success: false,
            });
            return;
        } else {
                const team = await Team.findOne({ 
                    _id : teamId
                })
                if(!team) { // case where the team to be invited does not exist
                    res.statusCode = 404;
                    res.json({ error: "not found", message: "team or invite not found!", success: false });
                    return;
                } else {
                    if (status) {
                        //remove event from pending of user
                        teamuser.pendingTeam = teamuser.pendingTeam.filter((participateTeamId) => {
                            return participateTeamId != teamId
                        })
                        // add event to participating of user
                        teamuser.participatingTeam = addUserToDepartment(teamuser.participatingTeam , team._id);
                       
                        // add member to team's accepted 
                        team.acceptedMembers = addUserToDepartment(team.acceptedMembers , teamuser._id);
                        // remove member from team's accepted
                        team.pendingMembers = team.pendingMembers.filter((participantId) => {
                            return participantId != teamuser._id;
                        })

                        // flush the changes
                        await teamuser.save();
                        await team.save();
                        
                    } else {
                        //remove event from pending of user
                        teamuser.pendingTeam = teamuser.pendingTeam.filter((participateTeamId) => {
                            return participateTeamId != teamId
                        })
                        // remove member from team's accepted
                        team.pendingMembers = team.pendingMembers.filter((participantId) => {
                            return participantId != teamuser._id;
                        })   

                        // flush the changes
                        await teamuser.save();
                        await team.save();
                    }
                    res.statusCode = 200;
                    res.json({ message: "invite response registered!", success: true });
                    return;
                }
            } 
    }
    catch (error) {
        console.log("error occured in the respondToTeamInvite() controller!");
        next(error);
    }
};

const getAllTeamInvite = async (req, res, next) => {
    const  id  = req.user._id;
    try {
        // fetch the user to get the pending array of the user
        const tUser = await User.findOne({_id : id});
        if(!tUser){
            res.statusCode = 400
            res.json({
                error : "user not found",
                message : "user does not exist",
                success : false
            })
            return;
        }
        if(!tUser.pendingTeam){
            res.statusCode = 200;
            res.json({
                invites : [],
                success : true,
            })
            return;
        }
        
        const invites = await Promise.all( tUser.pendingTeam.map(async (teamId) => {
            const tTeam = await Team.findOne({_id : teamId});
            const leader = await User.findOne({_id : tTeam.leader});

            const data =  {
                leader : leader.name,
                teamName : tTeam.name,
            }
            return data;
        }));
        console.log(invites)
        res.statusCode = 200;
        res.json({ invites : invites, success: true });
        return;
    } catch (error) {
        console.log("error occured in the getTeamInvite() controller!");
        next(error);
    }
};

const getAllTeamParticipating = async (req, res, next) => {
    const id  = req.user._id;

    try {
        // fetch the user to get the pending array of the user
        const tUser = await User.findOne({_id : id});

       
        if(!tUser){
            res.statusCode = 400;
            res.json(
                {
                    error : "User Not Found",
                    message : "User does not exist",
                    success : false
                }
            )
            return;
        }
        
        const teams = (await tUser.populate({path : 'participatingTeam' , populate : ['acceptedMembers' , 'pendingMembers']}));
        
        
        console.log("this is teams")
        
        res.statusCode = 200;
        
        res.json({ participating : teams.participatingTeam, success: true });
        return;
    } catch (error) {
        console.log("error occured in the getTeamInvite() controller!");
        next(error);
        return;
    }

};

const getTeamMembers = async (req, res, next) => {
    
    const  teamId  = req.body.teamId;
    const id = req.user._id;
 
    try {
        const  user = await User.findOne({
            _id : id
        })
        if(!user){
            res.statusCode = 400;
            res.json(
                {
                    error : "user not found",
                    message : "user does not exist",
                    success : false,
                }
            )
            return;
        }
        const team = await Team.findOne({_id : teamId});
        if (!team) {
            // case when team doesn't exists
            res.statusCode = 404;
            res.json({ error: "not found", message: "team not found!", success: false });
            return;
        } else {
            console.log(team);
            var acceptedMembers = [],pendingMembers = [];
            if(team.acceptedMembers){
                acceptedMembers = await Promise.all(team.acceptedMembers.map(async (memberId) => {
                    const acceptedUser = await User.findOne({_id : memberId});
                    return {
                        name : acceptedUser.name,
                        email : acceptedUser.email,
                    }
                }))
            }
            if(team.pendingMembers){
                pendingMembers = await Promise.all(team.pendingMembers.map(async (memberId) => {
                    const acceptedUser = await User.findOne({_id : memberId});
                    return {
                        name : acceptedUser.name,
                        email : acceptedUser.email,
                    }
                }))
            }
            // console.log(acceptedMembers)
            // console.log(pendingMembers)
            const data = {
                accepted : acceptedMembers,
                pending : pendingMembers,
            }
            res.statusCode = 200;
            res.json({ data , success: true });
            return;
        }
    } catch (error) {
        console.log("error occured in the getTeamMembers() controller!");
        next(error);
    }
};


module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    sendTeamInvitation,
    acceptOrRejectInvite,
    getAllTeamInvite,
    getAllTeamParticipating,
    getTeamMembers,
    updateResume,
}