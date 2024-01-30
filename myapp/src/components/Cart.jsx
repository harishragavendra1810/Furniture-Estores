import React from "react";
import "./Home.css";
import Topnav from "./Nav";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Cart() {
  const Navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "", height: "100vh" }}>
        <div>
          <Topnav />
        </div>
        <div
          className="text-center"
          style={{ backgroundColor: "#eff2f1", marginTop: "80px" }}
        >
          <h1 className="p-3" style={{ marginLeft: "50px" }}>
            My Cart
          </h1>
          <Table />
          <div className="row m-5 ">
            <div className=" col-12 col-lg-3 col-md-6">
              <button
                className="m-2 ebutton button"
                style={{ width: "200px" }}
                onClick={() => Navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
            <div className=" col-12 col-md-6 col-lg-3">
              {" "}
              <button
                className="m-2 ebutton button"
                style={{ width: "200px" }}
                onClick={() => Navigate("/shop")}
              >
                update Cart
              </button>
            </div>
          </div>
          <div className="row">
            <Coupon /> <Checkin />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Cart;

function Table() {
  const data = [
    {
      name: "Nordic chair",
      price: "₹ 1500 /-",
      total: "₹ 1500 /-",
      url: "https://themewagon.github.io/furni/images/product-2.png",
    },
    {
      name: "Ergonomic chair",
      price: "₹ 2500 /-",
      total: "₹ 2500 /-",
      url: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      name: "Ergonomic chair",
      price: "₹ 2500 /-",
      total: "₹ 2500 /-",
      url: "https://themewagon.github.io/furni/images/product-1.png",
    },
  ];

  return (
    <div className="App d-flex justify-content-center ">
      <table className="m-5 p-5">
        <tr className="p-5">
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        {data.map((val) => {
          return (
            <>
              <tr>
                <td>
                  <img
                    src={val.url}
                    style={{ height: "150px", width: "150px" }}
                    alt=""
                  />
                </td>
                <td>{val.name}</td>
                <td>
                  <input
                    type="number"
                    defaultValue="1"
                    style={{ width: "50px" }}
                  ></input>
                </td>
                <td>{val.price}</td>
                <td>{val.total}</td>
                <td>
                  <a href="www.google.com" class="btn btn-black btn-sm">
                    X
                  </a>
                </td>
              </tr>
            </>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td
            id="yy"
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "25px",
            }}
          >
            Total
          </td>
          <td
            style={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "25px",
            }}
          >
            ₹ 3500 /-
          </td>
        </tr>
      </table>
    </div>
  );
}
function Coupon() {
  return (
    <div className="m-auto p-5 col-12 col-md-6 col-lg-5">
      <h1>Coupon</h1>
      <p>Enter your coupon code if you have one.</p>
      <div className="row">
        <div className="col-12 col-lg-6 m-3">
          <input
            id="c"
            type="String"
            placeholder="CoupenCode"
            style={{ height: "50px", width: "200px", borderRadius: "20px" }}
          />
        </div>
        <div className="col-12 col-lg-2 m-3">
          {" "}
          <button className=" ebutton button " style={{ width: "200px" }}>
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
}
function Checkin() {
  const Navigate = useNavigate();
  return (
    <div
      className="  col-12 col-lg-5 col-md-6 m-auto "
      style={{ marginTop: "32px" }}
    >
      <h1>Cart Totals</h1>
      <p>Subtotal 500</p>
      <p>Total 500</p>
      <div>
        {" "}
        <button
          className="m-2 ebutton button"
          style={{ width: "200px" }}
          onClick={() => Navigate("/purchase")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
