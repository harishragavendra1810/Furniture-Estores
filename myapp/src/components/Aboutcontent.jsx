//import { Button } from 'bootstrap';
import React from 'react'
import Card from 'react-bootstrap/Card';
let url={
  url1:"https://themewagon.github.io/furni/images/person_1.jpg",
  url2:"https://themewagon.github.io/furni/images/person_1.jpg",
  url3:"https://themewagon.github.io/furni/images/person_1.jpg"
}


function Images({src}){
  return(
    <div className="col-12  col-lg-4  " >
     <div className='' style={{backgroundColor:"#eff2f1"}}>   
      <Card  className=""style={{ width: '18rem', backgroundColor:'transparent',color:'black'}}>
      <Card.Img variant="top" className='image11' src={src} />
      <Card.Body>
        <Card.Title>Harish</Card.Title>
        <Card.Text>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Card.Text>
        <a href='https://www.linkedin.com/in/harish-ragavendra-d-72372a222/' target='blank'><button className='btn btn-primary'>Know more</button></a>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}
function Aboutcontent() {
  return (
  <div style={{backgroundColor:"#eff2f1"}}>
    <h1 className='text-center'>Our Team</h1>
     <div className="container" >
        <div className='row 'style={{textAlign:"center"}} >
          <Images src={url.url1}  />
          <Images src={url.url2} />
          <Images src={url.url3}  /> 
        </div>
      </div>
   </div>
  )
}

export default Aboutcontent
