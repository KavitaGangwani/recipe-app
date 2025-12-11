import React from 'react'
import food from './../assets/food.jpg'

function Navbar({changeIngredients}) {
  const handleSearch = (e)=>{
    // console.log(e.target.value)
    changeIngredients(e.target.value)

  }
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm flex p-[10px] bg-[#fdd85d] ">
  <div className="flex-1">
    <a className="btn btn-ghost text-[30px] text-[#fffdf7] font-logo font-bold ">Dish Delights</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" onInput={handleSearch} className="input input-bordered  w-[500px] p-2 rounded-full outline-none " />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full">
          <img className='rounded-full h-[50px]'
            alt="Tailwind CSS Navbar component"
            src={food} 
            width={50} height={150}/>
        </div>
      </div>
     
    </div>
  </div>
</div></>
  )
}

export default Navbar