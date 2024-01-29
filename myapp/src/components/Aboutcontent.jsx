//import { Button } from 'bootstrap';
import React from 'react'
let url={
  url1:"https://themewagon.github.io/furni/images/person_1.jpg",
  url2:"https://themewagon.github.io/furni/images/person_1.jpg",
  url3:"https://themewagon.github.io/furni/images/person_1.jpg"
}


function Images({src}){
  return(
      <div className="mt-2 text-center col-12 col-md-6  col-lg-4"style={{  backgroundColor:'transparent',color:'black'}}>
        <div className='m-auto' style={{width:"18rem"}}>
         <img variant="top" className='image11'alt={src} style={{width:"80%"}} src={src} />
         <h4>Harish</h4>
         <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
         <a href='https://www.linkedin.com/in/harish-ragavendra-d-72372a222/' target='blank'><button className='btn btn-primary'>Know more</button></a>
         </div>
    </div>
  )
}
function Aboutcontent() {
  return (
  <div style={{backgroundColor:"#eff2f1"}}>
    <h1 className='text-center'>Our Team</h1>
     <div className="container" >
        <div className='row' >
          <Images src={url.url1}  />
          <Images src={url.url2} />
          <Images src={url.url3}  /> 
        </div>
      </div>
   </div>
  )
}

export default Aboutcontent
