const express = require('express');

const { isUserAuthenticated } = require('../middlewares/authMiddleware');
const { makeDepartmentalSecretary, verifyPayment , getAllNotFeePaid, getAllTeamsParticipatingInEvent} = require('../controllers/admin.controller');



const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/makedc',makeDepartmentalSecretary);
router.post('/verifypayment',verifyPayment);
router.get('/getallfeenotpaid' , getAllNotFeePaid);
router.get('/getallteamevent' , getAllTeamsParticipatingInEvent);

module.exports = router