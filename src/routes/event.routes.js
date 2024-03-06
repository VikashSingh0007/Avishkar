const express=require('express');
const { joinEvent, leaveEvent, getAllTeamsParticipatingInEvent, createEvent, makeDepartmentalSecretary, addSecretaryToEvent, verifyPayment, getAllNotFeePaid } = require('../controllers/event.controller');
const { isUserAuthenticated } = require('../middlewares/authMiddleware');


const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/join',joinEvent);
router.post('/leave',leaveEvent);
router.post('/create' , createEvent);



module.exports =  router;