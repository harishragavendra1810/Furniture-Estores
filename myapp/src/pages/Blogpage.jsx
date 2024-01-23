import Blogs from "../components/Blogs"
import Footer from "../components/Footer"

import Topnav from "../components/Nav"
import Shopbutton from "../components/Shopbutton"

function Blogpage(){
    return(
        <div  className="" style={{overflowX:"hidden",backgroundColor:"#eff2f1"}}>
        <div className="mt-5" style={{backgroundColor:"#3b5d50", width:"100%"}}>
        <Topnav/>
        <div className="container">
  < div className='row '>
    <div className="col-12 col-lg-5">
    <div className='d-flex flex-column justify-content-center p-5 m-5' style={{color:"white"}}>
   <h1 >Blogs</h1>
   <p>Until the end of life, no one wants to be a player. He doesn't like trucks. Aliquam vulputate velit imperdiet pain tempor sad.</p>
  <Shopbutton/>
</div> </div>
       <div className="col-12 col-lg-7"><img src='https://themewagon.github.io/furni/images/couch.png' alt='furnitureHome'/> </div>
      </div>
     </div>
     </div>
       <div style={{backgroundColor:"#eff2f1"}}>
       <h1 className='text-center'>Recent Blogs</h1>
        <Blogs/>
        <Blogs/>
        <Footer/></div>
        </div>
    )
}
export default Blogpage