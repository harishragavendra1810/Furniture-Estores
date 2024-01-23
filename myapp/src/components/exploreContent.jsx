import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
function Explorecontent() {
  return (
    <div className='d-flex flex-column justify-content-center p-5  ' style={{color:"black",marginLeft:"50 px"}}>
    <h1 >Crafted with excellent material</h1>
    <p>Until the end of life, no one wants to be a player. He doesn't like trucks. Aliquam vulputate velit imperdiet pain tempor sad.</p>
     <Button/>
</div>
  )
}

export default Explorecontent;

function Button(){
  const Navigate=useNavigate();
   return(
    <div className='m-2'>
    <button className='m-2 ebutton button' onClick={()=>Navigate("/shop")}>Show All</button></div>
   )
}