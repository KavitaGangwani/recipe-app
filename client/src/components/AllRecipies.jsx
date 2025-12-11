import React, { useEffect, useState } from 'react'
import RecipieCard from './RecipieCard'

function AllRecipies({ingredients}) {
  let [allRecipies, setRecipes] = useState([])
  let [selectedCuisines, setSelectedCuisines] = useState([]);
   let [selectedTags, setSelectedTags] = useState([]);
  let [isVegetarian, setIsVegetarian] = useState(null); // veg / non veg
  let [prepTime, setPrepTime] = useState(null); // default max
  // console.log(ingredients,"all")

  const handleFilter = () => {
    const params = new URLSearchParams();

  if (selectedCuisines.length > 0) {
    params.append("cuisine", selectedCuisines.join(","));
  }
  if (selectedTags.length > 0) {
    params.append("tags", selectedTags.join(","));
  }


  if (isVegetarian !== null) {
    params.append("isVegetarian", isVegetarian);
  }

  if (prepTime !== null) {
    params.append("maxPrepTime", prepTime);
  }
  if (ingredients !== null) {
    params.append("ingredients", ingredients);
  }

  return params.toString(); // gives string like a=b&c=d

  }
  const handleTags = (e) => {
    let tags = e.target.name
    if (e.target.checked) {
      setSelectedTags(prev => [...prev,tags])
    }else{
      setSelectedTags(prev => prev.filter(c => c !== tags));

    }


  }

  const handleCuisine = (e) => {
    let cuisine = e.target.name
    if (e.target.checked) {
      setSelectedCuisines(prev => [...prev,cuisine])
    }else{
      setSelectedCuisines(prev => prev.filter(c => c !== cuisine));

    }


  }

  // console.log(selectedCuisines.toString() ,"cosol")


  const handlePrepTime = (e) => {
  setPrepTime(Number(e.target.value));
};


  const getRecipes = async () => {

    try {

      let query = handleFilter()
      let url = query?`http://localhost:3000/recipes/all?${query}`:"http://localhost:3000/recipes/all"
      // console.log(url)

      let recipeData = await fetch(url)
      recipeData = await recipeData.json();

      console.log(recipeData)
      if (recipeData.status == 200) {
        setRecipes(recipeData.data)
      }


    } catch (error) {
      alert("Something went wrong")

    }
  }

  useEffect(() => {
    getRecipes();
  }, [selectedCuisines,isVegetarian,prepTime,ingredients,selectedTags])

  // console.log(allRecipies)



  return (
    <>
      <div className='bg-[#fffdf7] w-[100%] mx-auto px-8 pb-10 '>

        <h1 className='text-[40px] font-bold mb-8 font-heading text-center'>Explore Trending Recipies</h1>
        <div className='grid grid-cols-[20%_75%] gap-2 '>
          {/* sidebar div */}

          <div className=' bg-[#ade8f4] p-4'>
            {/* cuisine */}
            <div>
              <h1 className='font-heading text-[22px] mb-2 font-bold' > Cuisine </h1>

              <div>
                <input type="checkbox" name="Indian" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Indian</label>
              </div>
              <div>
                <input type="checkbox" name="Italian" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Italian</label>
              </div>
              <div>
                <input type="checkbox" name="Mexican" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Mexican</label>
              </div>
              <div>
                <input type="checkbox" name="Asian" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Asian</label>
              </div>
              <div>
                <input type="checkbox" name="Desert" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Desert</label>
              </div>
              <div>
                <input type="checkbox" name="Other" id="" onChange={handleCuisine} />
                <label htmlFor="" className='text-lg mx-2'>Other</label>
              </div>

            </div>
              <div className='border border-cyan-800 mx-[20px]  my-[5px]'></div>
            {/* veg non veg */}
            <div>
              <h1 className='font-heading text-[22px] my-2 font-bold' > Veg / Non-Veg </h1>

              <div>
                <input type="radio" name="food" id="" checked={isVegetarian === true} onChange={() => setIsVegetarian(true)} />
                <label htmlFor="" className='text-lg mx-2'>Vegetarian</label>
              </div>
              <div>
                <input type="radio" name="food" id="" checked={isVegetarian === false} onChange={() => setIsVegetarian(false)} />
                <label htmlFor="" className='text-lg mx-2'>Non-Veg</label>
              </div>

            </div>
             <div className='border border-cyan-800 mx-[20px]  my-[5px]'></div>
            {/* preptimefilter */}

            <div>
              <h1 className='font-heading text-[22px] my-2 font-bold' > PrepTime </h1>
              <input type="range" min={0} max={60} onChange={handlePrepTime} />


            </div>
             <div className='border border-cyan-800 mx-[20px]  my-[5px]'></div>
             {/* tags */}
             <div>

              <h1 className='font-heading text-[22px] mb-2 font-bold' > Tags </h1>

              <div>
                <input type="checkbox" name="dinner" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Dinner</label>
              </div>
              <div>
                <input type="checkbox" name="rich" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Rich</label>
              </div>
              <div>
                <input type="checkbox" name="party" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Party</label>
              </div>
              <div>
                <input type="checkbox" name="lunch" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Lunch</label>
              </div>
              <div>
                <input type="checkbox" name="vegan" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Vegan</label>
              </div>
              <div>
                <input type="checkbox" name="quick" id="" onChange={handleTags} />
                <label htmlFor="" className='text-lg mx-2'>Quick</label>
              </div>
              </div>




          </div>






          <div className=' ' >
            <div className='grid grid-cols-3 gap-3 '>
              {allRecipies.map((v, i) => {
                return <RecipieCard data={v} key={i} />

              })}

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AllRecipies