import ExploreCard from "../components/Explorecard";
import Footer from "../components/Footer";
import Topnav from "../components/Nav";

function Shoppage(){
    return(
        <>
           <div style={{overflowX:"hidden"}}>
    <div className="mt-5 " style={{backgroundColor:"#eff2f1", width:"100%"}}>
    < div className='row'>
      <Topnav/>
      <h1 className="mt-5 text-center container" style={{color:"black"}}  >Shop</h1>
       <ExploreCard/>
       <ExploreCard/>
       </div>
        </div>

        <Footer/>
        </div>
        </>
    )
}
export default Shoppage;    