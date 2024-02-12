import React from "react";
import Topnav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <Topnav />
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2VxZ2gyMHVnbTRrZmVvaG04MHJmMDN4c2J2YmhjcDB4bDU5OTFvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2FnW3yZRJVZH2g/giphy.gif"
        alt=""
        style={{ height: "70vh", width: "100vw" }}
      ></img>
      <div className="d-flex flex-row justify-content-center">
        <button
          className="btn btn-dark mt-5 text-center"
          onClick={() => Navigate("/shop")}
          style={{ width: "130px", height: "50px", textAlign: "center" }}
        >
          Back to Shop
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Thankyou;
