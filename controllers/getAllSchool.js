const db=require('../utils/dbConnect');

exports.getAllSchool=(req,res)=>{
   db.query('SELECT * FROM schools',(error,response)=>{
    if(error){
        res
        .status(500)
        .json({
            success: false,
            message: `Internal Server Error ${error.message}`
        })
        return;
    }
    res
    .status(200)
    .json({
        success: true,
        response
    })
   })
}