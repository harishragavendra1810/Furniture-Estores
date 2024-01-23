import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Shopbutton = () => {
  const Navigate=useNavigate();
  return (
    <div className='m-2'>
        <button className='m-2 button shopBtnClr' onClick={()=> Navigate("/shop")}>Shop Now</button>
        <button className='m-2 button exploreBtnClr'>Explore</button>
    </div>  
    
  )
}

export default Shopbutton