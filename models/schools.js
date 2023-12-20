const db = require('../utils/dbConnect');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    contact INT,
    image TEXT,
    email_id TEXT
  );
`;

db.query(createTableQuery, (error, result) => {
    if (error)
        console.log(error.message);
    console.log(result);
})