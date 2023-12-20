const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');

require('dotenv').config();

app.use('/uploads', express.static(path.join(__dirname, 'schoolimages')));
app.use(cors({
    origin:'*'
}))

const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


app.listen(process.env.PORT,()=>{
    console.log('Server Started At Port:',process.env.PORT);
})
app.get('/',(req,res)=>{
    res.send('Welcome to School Service');
})

require('./utils/dbConnect');
require('./models/schools');

const router=require('./routes/school');
app.use('/api/v1',router);