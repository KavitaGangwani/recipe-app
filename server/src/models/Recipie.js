const mongoose = require('mongoose')

const recipieSchema = mongoose.Schema({
    rec_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    cuisine: {
        type: String,
        enum: ['Indian', 'Italian', 'Mexican', 'Asian', 'Dessert', 'Other'],
        required: true
    },
    isVegetarian: {
        type: Boolean,
        default: false
    },
    prepTimeMinutes: {
        type: Number,
        min: [5, 'Preparation time must be at least 5 minutes']
    },
    ingredients: {
        type: [String],
        required: true
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'easy'
    },
    instructions: {
        type: String,
        required: true
    },
    tags: [String] // Array of strings
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});


const Recipie = mongoose.model('recipeis', recipieSchema);

module.exports = Recipie;


