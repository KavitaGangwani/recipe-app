import React from 'react'
import { Link } from 'react-router-dom'
import veg from './../assets/veg2.png'
import nonveg from './../assets/nonveg.png'

function RecipieCard({data}) {
  return (
    <>
    <div className="card border bg-[white] rounded-xl bg-base-100 w-[350px] shadow-sm">
  <figure>
    <img
      className='rounded-xl object-cover h-[350px]' width={350} height={350}
      src={data.image}
      alt="" />
  </figure>
  <div className="card-body px-2 py-4 flex justify-between">
    <div className=''>
        <h2 className="card-title text-[20px] mb-2 font-bold">
     {data.name} </h2>
      <div className="badge badge-secondary">
        {data.tags.map((v,i)=>{
          return <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong  font-medium py-1 px-2 mx-0.5  text-[12px] rounded-full bg-slate-100">{v}</span>
        })}
        
      </div>
      
    
    </div>
    
   <div className=''>

    <div className='ps-20 mb-2'>
        <img src={data.isVegetarian? veg : nonveg} width={20} height={20} alt="" />
    </div>
     <Link to={`/rec/${data.rec_id}`}  state={{ recipe: data }}><button className='bg-black px-4 py-2 text-[white]   text-[12px] rounded-xl mb-2' >See full Recipe </button></Link>
     

   </div>
    
  </div>
</div>
    </>
  )
}

export default RecipieCard