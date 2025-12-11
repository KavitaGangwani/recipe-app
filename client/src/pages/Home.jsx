import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AIcta from '../components/AIcta'
import AllRecipies from '../components/AllRecipies'
import Footer from '../components/Footer'

function Home() {

  let [ingredients , setIngredients] = useState(null) 
  

  const changeIngredients = (recieved)=>{
    console.log(recieved,"recieved")
    setIngredients(recieved)

  }

  return (
    <>
    <Navbar changeIngredients = {changeIngredients}/>
    <AIcta/>
    <AllRecipies ingredients = {ingredients}/>
    <Footer/>
    </>
  )
}

export default Home