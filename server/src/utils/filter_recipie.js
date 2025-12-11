const filterRecipie = (filters)=>{
    console.log(filters)
    let allFilters = {}
    if(filters.cuisine){
        const cuisines = filters.cuisine.split(',').map((v,i)=>{return v.trim()})
       
        allFilters.cuisine = {$in :cuisines};
    }
    if (filters.maxPrepTime) {
        const time = parseInt(filters.maxPrepTime, 10);
        if (!isNaN(time)) {
            
            allFilters.prepTimeMinutes = { $lte: time };
        }
    }
    if (filters.tags) {
        const tags = filters.tags.split(',').map(t => t.trim());
        
        allFilters.tags = { $all: tags };
    }
    if (filters.ingredients) {
        const ingredients = filters.ingredients.split(',').map(i => i.trim());
        
        // We want to find documents where the ingredients array contains AT LEAST ONE of the queried ingredients.
        // We use $in with a RegExp to ensure the search is case-insensitive.
        const ingredientRegexes = ingredients.map(ing => new RegExp(ing, 'i'));
        
        allFilters.ingredients = { $in: ingredientRegexes };
    }
    if (filters.isVegetarian !== undefined) {
        // Convert the string "true" or "false" from req.query to a boolean
        allFilters.isVegetarian = filters.isVegetarian === 'true';
    }
    

    console.log(allFilters)

    return allFilters;

}

module.exports = {filterRecipie}