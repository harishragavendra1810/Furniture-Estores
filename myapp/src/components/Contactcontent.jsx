import "./Home.css"
function Contactcontent(){
return(
<div className="container mt-5 mb-5">     
<div className="row">
     <div className="container col-lg-8 col-10 col-md-7 ">
           <div className="row mt-3 mb-5">
                <div className="col-12 col-lg-4 ">
                    <div className="d-flex">
                        <div className="bgdark icnsize d-flex flex-column justify-content-center " style={{backgroundColor:"#3b5d50"}}> 
                          <i class="fa-solid fa-location-dot icn"></i>    
                        </div> 
                        <p className="mt-3" style={{marginLeft:"10px"}}>Othakalmandapam,cbe,62562</p>
                    </div>
                 </div>
                 <div className="col-12 col-lg-4">
                    <div className="d-flex">
                        <div className="bgdark icnsize d-flex flex-column justify-content-center " style={{backgroundColor:"#3b5d50"}}> 
                        <i class="fa-solid fa-envelope icn"></i>
                        </div> 
                        <p className="mt-3" style={{marginLeft:"10px"}}>furni@business.com</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="d-flex">
                        <div className="bgdark icnsize d-flex flex-column justify-content-center " style={{backgroundColor:"#3b5d50"}}> 
                          <i class="fa-solid fa-phone icn"></i>    
                        </div> 
                        <p className="mt-3" style={{marginLeft:"10px"}}>+91 1259553209</p>
                    </div> 
                </div>
            </div>
     </div>
            <div className="container col-lg-8 col-10 col-md-7">
                    <div className="row">
                         <div className="col-lg-6">
                             <div className="d-flex flex-column">
                                <label htmlFor="fname" >First Name</label>
                                <input className="form1" type="text" id="fname"></input></div>
                            </div>
                        <div className="col-lg-6">
                            <div className="d-flex flex-column">
                                <label htmlFor="lname" >Last Name</label>
                                <input className="form1" type="text" id="lname"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex flex-column">
                                <label htmlFor="mail" >Email Address</label>
                                <input className="form1" type="email" id="mail"></input>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="d-flex flex-column">
                                <label htmlFor="message" >Message</label>
                                <textarea className="" rows="8"cols="30" id="message"/>
                            </div>
                        </div>
                       
                     </div>
                     <button className="sendbtn">Send Message</button>
            </div>  
    </div>  
  </div>   )
}
export default Contactcontent






