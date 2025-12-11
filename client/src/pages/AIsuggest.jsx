import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AIsuggest() {

  const [loading,setLoading] = useState(false)
  const [resData,setResData] = useState(null)
  const [resError,setResError] = useState(false)

  const callAI = async(e)=>{

    try {
      setLoading(true)
      e.preventDefault();
      const formData = new FormData(e.target)
      // console.log(formData.get("ingredients").split(','))
      const data = {
        ingredients : formData.get("ingredients").split(',')
      }
      let res = await fetch('http://localhost:3000/recipe/suggest',
        {
          method: "POST",
          headers: {
      "Content-Type": "application/json",
        },
          body:JSON.stringify(data)
        })

        res = await res.json()
        if(res){setLoading(false)
          setResData(res)
        
       e.target.elements.ingredients.value = "";
         }
        
         if(res.status == 500){
          alert("AI limit exceeded")
          setResError(true)
         }

;

    } catch (error) {
      setLoading(false);
    console.error("Error in callAI:", error);
    alert("Something went wrong. Please try again.");
      
    }

  }
  return (
    <>
    <Navbar/>
    <div className='mx-auto'>
        <div className='mx-auto flex gap-6  w-[60%] py-10'>
          <form action="" onSubmit={callAI} >
            <input type="text" placeholder='Enter ingredients comma separated...' name="ingredients" id="" className='px-4 py-1 rounded-full border outline-none text-[18px] h-[50px] w-[700px]'  />
            <button type='submit' className='bg-black px-4 py-2 text-[white] text-[22px] rounded-full mb-2 mx-2'> Generate </button>
          </form>
            
        </div>
        <div className=' w-[80%] min-h-[437px] mx-auto'>
          {loading?
         
         <div className=' mx-auto w-[100px]'>
          <div 
    className=" mx-auto  text-center p-10 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
         </div>
          : resData ? (<div className='mx-auto p-10'>
       
       <h1 className='font-heading text-center text-[30px] font-bold '>{resData?.suggestion?.recipeName}</h1>
       <div className='flex justify-between'>

        {/* <div className='text-[20px] my-2'>Ingredients : {resData.suggestion.ingredientList.map(v=>`${v} `)}</div>  */}
        <div>{resData?.suggestion?.preparationTime} </div>
 
       </div> 
       <div>
        <h1 className='font-heading text-[22px]'> {resError?" AI Limit exceeded":"Instructions"}</h1>
        <ul className='px-5 text-[18px]'>
                {resData?.suggestion?.instructions?.map((v,i)=>{
                    return <li className='list-disc'> {v}</li>

                })}
                </ul>
       </div>


    </div> ) : null }
            
        </div >
    </div>
    <Footer/>
    </>
  )
}

export default AIsuggest