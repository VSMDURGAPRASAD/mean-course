const express =require('express');
const router =express.Router();
const Contact =require('../models/contacts')

router.get('/contacts',(req,res,next) =>{
    res.send("Retreiving the contact list"); 
});
//adding a conract
router.post('/contact',(req,res,next) =>{
   
})
//deleting a count 
router.post('/contact/:id',(req,res,next) =>{
   
})

module.exports=router;
