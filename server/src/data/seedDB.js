const mongoose = require('mongoose');



const recipes = require('./recipie'); 
const Recipe = require('../models/Recipie');
const connectDB = require('../config/db');

// Load environment variables for MONGODB_URI
require('dotenv').config(); 

const seedDatabase = async () => {
    if (!process.env.MONGODB_URI) {
        console.error(' MONGODB_URI is not defined in the .env file.');
        process.exit(1);
    }
    
    try {
        await connectDB();
        
        console.log('Clearing existing recipe data...');
        // Clears all existing recipes before inserting new ones
        await Recipe.deleteMany(); 

        console.log(`Inserting ${recipes.length} new recipes...`);
        
        await Recipe.insertMany(recipes);

        console.log('✅ Database successfully seeded!');
        process.exit(0);

    } catch (error) {
        console.error(`❌ Error during seeding: ${error.message}`);
        process.exit(1);
    }
}

// Runs the script only if it's executed directly (via npm run seed)
if (require.main === module) {
    seedDatabase();
}