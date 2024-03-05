const express=require('express');
const { createTeam, deleteTeam, updateTeam, sendTeamInvitation, acceptOrRejectInvite, getAllTeamParticipating, getAllTeamInvite, getTeamMembers, updateResume , userProfile} = require('../controllers/team.controller')
const { isUserAuthenticated } = require('../middlewares/authMiddleware');
const router=express.Router();

router.use((req,res,next) => {
    console.log('Team Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/create' , createTeam);
router.post('/delete' , deleteTeam);
router.post('/update' , updateTeam);
router.post('/invite' , sendTeamInvitation);
router.post('/respond' , acceptOrRejectInvite);
router.get('/getparticipating' , getAllTeamParticipating);
router.get('/getinvite' , getAllTeamInvite);
router.get('/allmembers', getTeamMembers);
router.post('/updateresume' , updateResume);
router.get('/getuser' , userProfile); 


module.exports = router