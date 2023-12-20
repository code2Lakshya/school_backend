const sql=require('mysql');

require('dotenv').config();

const db=  sql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

db.connect((error)=>{
    if(error)
    {
        console.log('Db Conenct failure',error.message);
        process.exit(1);
    }
    console.log('Db Connect Success');
})

module.exports=db;