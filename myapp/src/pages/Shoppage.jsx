
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Topnav from "../components/Nav";

function Shoppage() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div
          className="mt-5 "
          style={{ backgroundColor: "#eff2f1", width: "100%" }}
        >
          <Topnav />
          <div className="container">
            <div className="row">
              <h1 className="mt-5 text-center" style={{ color: "black" }}>
                Shop
              </h1>
              <ShopItems/>
             
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Shoppage;

let card = [
    {
    url: "https://themewagon.github.io/furni/images/product-1.png",
    name:"Nordic Cusion Chair",
    price:" ₹ 1500 /-",
    },
  
    {
    url: "https://themewagon.github.io/furni/images/product-2.png",
    name:"Ergonomic chair ",
    price:" ₹ 3200 /-",
    },
  
    {
    url: "https://themewagon.github.io/furni/images/product-3.png",
    name:"kruzo chair",
    price:" ₹ 1000 /-",
    },

    {
    url: "https://themewagon.github.io/furni/images/sofa.png" ,
    name:"Aero Chair",
    price:" ₹ 2500 /-",   
    },
    {
    url: "https://themewagon.github.io/furni/images/product-1.png" ,
    name:"Aero Chair",
    price:" ₹ 2500 /-",   
    },  
    
    {
    url: "https://themewagon.github.io/furni/images/sofa.png" ,
    name:"Aer5 Chair",
    price:" ₹ 2500 /-",   
    }
    


];

function ShopItems(){
    const Navigate = useNavigate();
  return(
    <>
    <div className="container">
        <div className="row">
           {card.map((val)=> {
             return(
          <div
            className="d-flex flex-column justify-content-center p-5 img col-lg-4  col-6 col-md-6"
            style={{ color: "black" }}
          >
            <img className="" src={val.url} alt="" />
            <div className="text-center">
              <h6 >{val.name}</h6>
              <p> {val.price}</p>
              <button
                className=" button shopBtnClr"
                onClick={() => Navigate("/cart")}
               >
                Add to cart
              </button>
            </div>
           
            </div>)})}


            </div>
            </div>
            </>
  )
}
