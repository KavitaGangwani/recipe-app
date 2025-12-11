Backend
⦁	This project is built using Node Version 20.10.0
⦁	installed express, cors, dotenv and mongoose packages
⦁	have made recipie model, its contollers and routes
⦁	am seeding data using an seedDb.js file in data folder to run that file use "npm run seed" to seed that data in mongoDB
⦁	for ai integration gemini-2.5-flash this model is being used
⦁	Only ~20 free requests PER DAY per model for the free tier.


⦁	the route to see all recipie is http://localhost:3000/recipes/all - GET Method.
⦁	the route to see suggested recipie is http://localhost:3000/recipe/suggest - POST Method.
                                         data in this api will be taken in body - {
                                            "ingredients" = ["banana","mango","apple"] 
                                         }

⦁	npm install --save-dev jest                     
⦁	to run test use "npm test"
⦁	in the folder uploads i have uploaded images manually for recipes. THIS ARE NOT USER UPLOADED IMAGES WHEN USER CREATES A RECIPE. THESE ARE STATIC IMAGES ADDED BY ME



Frontend
⦁	Made three pages Home, aiSuggested recipepage, singleRecipepage
⦁	have not used any state management library since it wasn't required 
⦁	search via ingredient is implemented in the searchbar located on navbar
⦁	rest of the filters are on the sidebar present in explore recipie section.
