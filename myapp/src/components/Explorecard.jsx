import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
let card = {
  url1: "https://themewagon.github.io/furni/images/product-1.png",

  url2: "https://themewagon.github.io/furni/images/product-2.png",

  url3: "https://themewagon.github.io/furni/images/product-3.png",
};


function ExploreCard() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="d-flex flex-column justify-content-center p-5 img col-lg-4  col-12 col-md-6"
            style={{ color: "black" }}
          >
            <img className="" src={card.url1} alt="" />
            <div className="text-center">
              <h6 id="yy">Nordic Cusion Chair</h6>
              <p> ₹ 1500 /-</p>
              <button
                className="m-2 button shopBtnClr"
                onClick={() => Navigate("/cart")}
              >
                Add to cart
              </button>{" "}
            </div>{" "}
          </div>
          <div
            className="d-flex flex-column justify-content-center p-5 img col-lg-4  col-12 col-md-6"
            style={{ color: "black" }}
          >
            <img className="" src={card.url2} alt="" />
            <div className="text-center">
              <h6> Aero Cusion Chair</h6>
              <p> ₹ 1200 /-</p>
              <button
                className="m-2 button shopBtnClr"
                onClick={() => Navigate("/cart")}
              >
                Add to cart
              </button>{" "}
            </div>{" "}
          </div>
          <div
            className="d-flex flex-column justify-content-center p-5 img col-lg-4  col-12 col-md-6"
            style={{ color: "black" }}
          >
            <img className="" src={card.url3} alt="" />
            <div className="text-center">
              <h6>kruzo Cusion Chair</h6>
              <p> ₹ 2500 /-</p>
              <button
                className="m-2 button shopBtnClr"
                onClick={() => Navigate("/cart")}
              >
                Add to cart
              </button>{" "}
            </div>{" "}
          </div>

        </div>
      </div>
    </> 
  );
}

export default ExploreCard;
