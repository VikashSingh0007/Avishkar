const express=require('express');
const { joinEvent, leaveEvent, createEvent , getAllEvents } = require('../controllers/event.controller');
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
router.get('/getallevent' , getAllEvents);


module.exports =  router;