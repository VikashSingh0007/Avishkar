const express=require('express');
const { joinEvent, leaveEvent, createEvent , getAllEvents } = require('../controllers/event.controller');
const { isUserAuthenticated , isDepartmentalCoordinator } = require('../middlewares/authMiddleware');


const router=express.Router();

router.use((req,res,next) => {
    console.log('Event Route Triggreed');
    next();
})

router.use(isUserAuthenticated);

router.post('/join',joinEvent);
router.post('/leave',leaveEvent);
router.post('/create' , createEvent); // close this before going live
router.get('/getallevent' , isDepartmentalCoordinator ,getAllEvents);


module.exports =  router;