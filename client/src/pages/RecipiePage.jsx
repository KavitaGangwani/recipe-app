import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import veg from './../assets/veg2.png'
import nonveg from './../assets/nonveg.png'

function RecipiePage() {

    const {state} = useLocation()
    console.log(state.recipe)
  return (
   <>
   <Navbar/>
   <div className='w-full relative'>
    <div className='w-full  border bg-slate-50'>
        <img src={state.recipe.image} className='mx-auto object-cover h-[300px]' alt="" />
    </div>
    <div className='p-10 pt-[100px] bg-[#ade8f4]'>
        <h1 className='font-heading text-[20px] font-bold '> Ingredients : <span className='font-medium text-[18px]'>{state.recipe.ingredients.join(', ')}</span>  </h1>
        <div>
            <h1 className='font-heading text-[20px] font-bold'>Instructions :</h1>
          
                <ul className='px-5 text-[18px]'>
                {state.recipe.instructions.split('. ').map((v,i)=>{
                    return <li className='list-disc'> {v}</li>

                })}
                </ul>
            
        </div>
    </div>

   </div>
   <div className='border rounded-xl w-[500px] shadow-lg bg-[white] absolute top-[320px] left-[500px] p-5 text-center'>
    <div className='flex gap-2 w-[65%] mx-auto'>
        <h1 className='font-heading  font-bold text-center'><span className='text-[25px]'>{state.recipe.name}</span>
        
    </h1>
    <div><img className='height-[15px]' src={state.recipe.isVegetarian? veg : nonveg} width={10} height={10} alt="" /></div>
    

    </div>
    
    <div className="badge badge-secondary mb-3">
        {state.recipe.tags.map((v,i)=>{
          return <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong  font-medium py-1 px-2 mx-0.5  text-[12px] rounded-full bg-slate-100">{v}</span>
        })}
        
      </div>
    <div className='grid grid-cols-3 text-slate-400'>
        <div className='border border-red-500 w-[60%] mx-auto text-red-500 rounded-xl p-1 bg-pink-200'>{state.recipe.difficulty}</div>
        <div className='border border-red-500 w-[60%] mx-auto text-red-500 rounded-xl p-1 bg-pink-200 '>
             <div className='   '>
                <p>{state.recipe.cuisine}</p>
                    
                </div>
                </div>
           
        <div className='border border-red-500 w-[60%] mx-auto text-red-500 rounded-xl p-1 bg-pink-200'> {state.recipe.prepTimeMinutes} mins</div>

    </div>
   </div>
   <Footer/>

   </>
  )
}

export default RecipiePage