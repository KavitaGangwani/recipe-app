import React from 'react'
import character from './../assets/charrr.png'
import { Link } from 'react-router-dom'

function AIcta() {
  return (
    <>
    <div className='bg-[#fffdf7] w-[100%] mx-auto p-8'>

        <div>
            <img className='mx-auto animate-bounceFast  mb-0' src={character} width={130} height={130} alt="" />
        </div>


        <div className=' mx-auto m-0 text-center' >
            <h1 className='text-[45px] font-bit  font-bold'>Limited Ingredients? Try me!!! </h1>
            <p className='text-slate-500 mx-auto mb-3 text-[16px]  w-[450px]'>Hi, I am ChefBot. I am your recipe generater AI assisstant. You can tell me ingredients and I will generate a recipe for you.</p>
            <Link to={'/aisuggest'}><button className='bg-black px-4 py-2 text-[white]   text-[18px] rounded-lg mb-2' >Explore Now &rarr; </button></Link>

        </div>
        <div className='border mx-[100px] mt-[35px]'></div>
    </div>
    </>
  )
}

export default AIcta