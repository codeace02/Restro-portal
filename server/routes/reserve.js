const express=require('express');
const router=express.Router();
const reserveCtrl=require('../controllers/reserve')

router.post('/create', reserveCtrl.createReservation)

module.exports=router;


