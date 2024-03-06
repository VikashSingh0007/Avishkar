const User = require('../models/user.model');
const Team = require('../models/team.model');
const Event = require('../models/event.model')
const { addUserToDepartment, findUserInDepartment } = require('../helper/eventHelper');
const dc = "DepartmentCordinator";
const fes = "FestivalSecretary";


const makeDepartmentalSecretary = async (req,res,next) => {
    const { email  } = req.body;
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
    const { email , status } = req.body; // id of the user 
    // !!!!!!!!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!
    /*
        here we need  a mechanism to identify that only DC or FS is calling
        negligence may lead to serious security issues
    */
    if(!email){
        res.statusCode = 400;
        res.json({
            error : "User Email cannot be NULL",
            success : false,
            message : "User Email cannot be Empty"
        })
        return;
    }
    if(status == null){
        res.statusCode = 400;
        res.json({
            error : "Response Status Cannot Be Empty",
            success : false,
            message : "Response Status Cannot Be Empty"
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
        if(status){
            tuser.isFeePaid = true;
            await tuser.save();
            res.statusCode = 200;
            res.json({
                success : true,
                message : "User has Paid The Fee and Verified The Payment"
            })
            return;
        }
        else{
            await User.deleteOne({email : email});
            res.statusCode = 200;
            res.json({
                success : true,
                message : "User has Been Deleted From The Database"
            })
            return;
        }
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

        const data = await User.find({isFeePaid : false } , {email : 1, phone : 1 , name : 1 , college : 1, paymentLink : 1} );
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
    getAllNotFeePaid,
    getAllTeamsParticipatingInEvent,
    makeDepartmentalSecretary,
    verifyPayment
}