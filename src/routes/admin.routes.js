const express = require('express');

const { isUserAuthenticated , isFestivalSecretary , isDepartmentalCoordinator} = require('../middlewares/authMiddleware');
const { makeDepartmentalSecretary, verifyPayment , getAllNotFeePaid, getAllTeamsParticipatingInEvent,deleteDepartmentCoordie, downloadExcelEvent,getDepartmentCoordies } = require('../controllers/admin.controller');



const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/makedc',isFestivalSecretary,makeDepartmentalSecretary);
router.post('/verifypayment',isFestivalSecretary,verifyPayment);
router.get('/getallfeenotpaid' , isFestivalSecretary ,getAllNotFeePaid);
router.post('/getallteamevent' , isDepartmentalCoordinator ,getAllTeamsParticipatingInEvent);
router.post('/download' , isDepartmentalCoordinator ,downloadExcelEvent)
router.get('/getcoordie', isFestivalSecretary ,getDepartmentCoordies)
router.post('/deletecoordie', isFestivalSecretary ,deleteDepartmentCoordie)
module.exports = router