import React from 'react'
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger'
const Whychooseus = () => {


  const [counterOn,setCounterOn] = useState(false);
  return (
    <>
    <div className='container  mt-5 mb-5' >
      <h1 className='m-5' style={{color:"black"}}>Why Choose US ?</h1>
        <div className='row'>
                <div className='col-lg-7 col-12 col-md-12'>
                  <div className='d-flex'>
                    <img src='https://themewagon.github.io/furni/images/img-grid-1.jpg' alt=''style={{height:"500px",width:"400px",borderRadius:"15px"}}/>
                  <div>
                        <img className="pb-2"src='https://themewagon.github.io/furni/images/img-grid-2.jpg' alt=''style={{height:"250px",width:"250px",borderRadius:"10px",marginLeft:"15px"}}/>
                        <img className="" src='https://themewagon.github.io/furni/images/img-grid-3.jpg' alt='' style={{height:"250px",width:"250px",borderRadius:"10px",marginLeft:"15px"}}/>
                        </div>
                    </div>
                    </div>
                  <div className='col-lg-5 col-12 col-md-12 mt-5'>
                    <div className='container'>
                    <h2 style={{color:"black"}}>We Help You Make Modern Interior Design</h2>
                    <p>Until it's easier than to make a pure makeup policy. Until the end of life, no one wants to be a player. He doesn't like trucks. Aliquam vulputate velit imperdiet pain tempor sad. Children living in old age and grandchildren</p>
                    <ul>
                      <div className='d-flex'>
                      <li>Until the end of life, no one wants to be a player</li>
                      <li style={{marginLeft:"100px"}}>Until the end of life, no one wants to be a player</li></div>
                      <div className='d-flex'>
                      <li>Until the end of life, no one wants to be a player</li>
                      <li style={{marginLeft:"100px"}}>Until the end of life, no one wants to be a player</li></div>
                    </ul>
                   <Button/>
                    </div>
                  </div>
        </div>
    </div>
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className='container boxcountry text-center  mb-5'>
            <div className='row'>
            
                <div className='col-6 col-md-3 col-lg-4'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter01.png" alt="" />
                    <h2 > 
                       {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}M +
                    </h2>
                    <h5 >customers</h5>
                </div>

                <div className='col-6 col-md-3 col-lg-4'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter02.png" alt="" />
                    <h2 > 
                    {counterOn && <CountUp start={0} end={11} duration={3} delay={0}/>}
                    </h2>
                   <h5  >countries</h5>
                </div>

                <div className='col-6 col-md-3 col-lg-4'>
                    <img src="https://pixner.net/boleto/demo/assets/images/about/about-counter03.png" alt="" />
                    <h2 > 
                    {counterOn && <CountUp start={0} end={234} duration={4} delay={0}/>}
                    </h2>
                    <h5 >cities</h5>
                </div>

           
            
            </div>
        </div>
        </ScrollTrigger>
 
  </>
  ) 
}

export default Whychooseus;

function Button(){
  const Navigate=useNavigate();
   return(
    <div className='m-2'>
    <button className='m-2 ebutton button' onClick={()=>Navigate("/shop")}>Show All</button></div>
   )
}