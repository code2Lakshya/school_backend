const express=require('express');
const router=express.Router();


const {addSchool}=require('../controllers/addSchool');
const {getAllSchool}=require('../controllers/getAllSchool');

router.post('/add',addSchool);
router.get('/allschool',getAllSchool);

module.exports=router;