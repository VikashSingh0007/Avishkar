const express = require('express');

const { isUserAuthenticated } = require('../middlewares/authMiddleware');
const { makeDepartmentalSecretary, verifyPayment , getAllNotFeePaid, getAllTeamsParticipatingInEvent,deleteDepartmentCoordie, downloadExcelEvent,getDepartmentCoordies } = require('../controllers/admin.controller');



const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/makedc',makeDepartmentalSecretary);
router.post('/verifypayment',verifyPayment);
router.get('/getallfeenotpaid' , getAllNotFeePaid);
router.post('/getallteamevent' , getAllTeamsParticipatingInEvent);
router.post('/download' , downloadExcelEvent)
router.get('/getcoordie',getDepartmentCoordies)
router.post('/deletecoordie',deleteDepartmentCoordie)
module.exports = router