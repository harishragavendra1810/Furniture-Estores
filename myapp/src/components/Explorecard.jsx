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
      <div
        className="d-flex flex-column justify-content-center p-5 col-12 col-lg-2 m-4 img "
        style={{ color: "black" }}
      >
        <img className="" src={card.url1} alt="" />
        <div className="text-center">
          <h4>Nordic Cusion Chair</h4>
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
        className="d-flex flex-column justify-content-center p-5 col-12 col-lg-2 m-4 img"
        style={{ color: "black" }}
      >
        <img className="" src={card.url2} alt="" />
        <div className="text-center">
          <h4>kruzo Aero Chair</h4>
          <p> ₹ 2200 /-</p>
          <button
            className="m-2 button shopBtnClr"
            onClick={() => Navigate("/cart")}
          >
            Add to cart
          </button>{" "}
        </div>{" "}
      </div>

      <div
        className="d-flex flex-column justify-content-center p-5 col-12 col-lg-2 m-4 img"
        style={{ color: "black" }}
      >
        <img className="" src={card.url3} alt="" />
        <div className="text-center">
          <h4>Ergonomic Chair</h4>
          <p> ₹ 3500 /-</p>
          <button
            className="m-2 button shopBtnClr"
            onClick={() => Navigate("/cart")}
          >
            Add to cart
          </button>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default ExploreCard;
