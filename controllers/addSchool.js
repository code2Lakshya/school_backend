const db = require('../utils/dbConnect');


exports.addSchool = async (req, res) => {
    try {
        const { image } = req.files;
        const { name, address, city, state, contact, email } = req.body;
        if (!name || !address || !city || !state || !contact || !email || !image) {
            res
                .status(400)
                .json({
                    success: false,
                    message: "All the fields are required"
                })
        }
        else if (!email.includes('@') || !email.includes('.')) {
            res
                .status(400)
                .json({
                    sucecss: false,
                    response: 'Invalid Email'
                })
        }
        else {
            image.mv(__dirname +'/..' +'/schoolimages/' + image.name);
            const sqlquery = `INSERT INTO schools
            (name, address, city, state, contact, image, email_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
            db.query(sqlquery, [name, address, city, state, contact, image.name, email], (error, result) => {
                if (error) {
                    res
                        .status(500)
                        .json({
                            success: false,
                            message: `Internal Server Error ${error.message}`
                        })
                    console.log(error.message)
                    return;
                }
                res
                    .status(200)
                    .json({
                        success: true,
                        message: 'Added School'
                    })
            })
        }
    }
    catch (error) {
        res
        .status(500)
        .json({
            success: false,
            response: `Internal Server Error ${error.message}`
        })
    }
} 
