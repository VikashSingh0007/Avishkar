const express = require('express');

const { isUserAuthenticated } = require('../middlewares/authMiddleware');
const { makeDepartmentalSecretary, verifyPayment , getAllNotFeePaid} = require('../controllers/admin.controller');
const { getAllTeamParticipating } = require('../controllers/team.controller');


const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/makedc',makeDepartmentalSecretary);
router.post('/verifypayment',verifyPayment);
router.get('/getallfeenotpaid' , getAllNotFeePaid);
router.get('/getallteam' , getAllTeamParticipating);

module.exports = router