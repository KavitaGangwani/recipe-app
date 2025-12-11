const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async ()=>{
   try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Connected to the database successfully');
        } catch (err) {
            console.error(err.message);
            process.exit(1); 
        }
}

module.exports = connectDb