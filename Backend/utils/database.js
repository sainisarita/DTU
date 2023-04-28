const mongoose = require('mongoose')
// ./utils/database.js
const DB_URI = 'mongodb+srv://sarita:sarita9643@cluster0.gbywgfa.mongodb.net/DTU';

function dbConnect() {
  return mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Database connection successfully')
}).catch((e)=>{
    console.log('Failed to connect database',e)
});
}

module.exports = { dbConnect };

