import React from 'react'
import Explorecontent from '../components/exploreContent'
import Explorecard from '../components/Explorecard'


const Explore = () => {
  return (
    <div className="container p-5" id="explore" style={{backgroundColor:"#eff2f1", width:"100%"}}>
    < div className='row'>
      <div className="col-lg-4 col-12" style={{backgroundColor:"none"}}>
        <Explorecontent/> </div> 
       <div className='col-lg-8 col-12'> <Explorecard /></div>
        
          </div>
      
    </div> )
}

export default Explore