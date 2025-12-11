const { GoogleGenAI } = require("@google/genai");
const axios = require("axios");
console.log(process.env.AI_API_KEY)

const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });
const model = 'gemini-2.5-flash';

const suggestRecipie = async(req,res)=>{
    try {
       
      console.log(req.body)
        const {ingredients} = req.body

        if (!ingredients || ingredients.length === 0) {
            return res.status(400).json({ message: "Please provide a list of ingredients in the request body." });
        }

        const ingredientList = ingredients.join(', ');
        const prompt = `Based ONLY on the following ingredients: ${ingredientList}. Suggest one complete, realistic recipe. The response MUST be a valid, pure **JSON object** and must not contain any surrounding text, markdown, or code fences. Include the following keys: **recipeName**, **ingredientList**, **preparationTime**,**recipieImageDescription** and **instructions**.`;

        // 3. Call the Gemini API (using your initialized 'ai' client)
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config:{
            responseMimeType: "application/json"
        },
        });
        // console.log(response.text.trim())
        const suggestedRec = JSON.parse(response.text.trim())
       
//  const imageUrl = await getDishImage(suggestedRec.recipieName);

        res.status(200).json({ 
            status:200,
            message: "AI Recipe Suggestion Generated", 
            suggestion: suggestedRec,
            // image: imageUrl
        });

       
        
    } catch (error) {

         console.error("AI Suggestion Error:");
        res.status(500).json({ status:500, message: "Error calling AI service.", error: error.message });
        
    }
    

}

// async function getDishImage(dishName) {
//     const searchKeywords = `${dishName} complete dish food plated `;
//   try {
//     const response = await axios.get(
//       `https://api.unsplash.com/search/photos`,
//       {
//         params: {
//           query: searchKeywords,
//           per_page: 1
//         },
//         headers: {
//           Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`
//         }
//       }
//     );

//     return response.data?.results?.[0]?.urls?.regular || null;
//   } catch (err) {
//     console.error("Unsplash error:", err);
//     return null;
//   }
// }

module.exports ={suggestRecipie}