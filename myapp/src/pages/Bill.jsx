import React from "react";
import "../components/Home.css";
import { useNavigate } from "react-router-dom";
const Bill = () => {
  return (
    <div className="bg" style={{ backgroundColor: "#eff2f1" }}>
      <div className="container p-5" style={{ marginTop: "80px" }}>
        <Address />
      </div>
    </div>
  );
};

export default Bill;

function Address() {
  return (
    <>
      <div className="container ml-5" style={{ color: "black" }}>
        <div className="row p-2">
          <div className=" col-lg-6 col-12 col-md-5 ">
            <div className="container">
              <h1>Billing Address</h1>
              <div className="bg-white row p-5">
                <div className="col-lg-12">
                  <div className="d-flex flex-column">
                    <label htmlFor="country">
                      Country<span className="text-danger">*</span>
                    </label>
                    <input className="form1" type="text" id="country"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="fname">
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input className="form1" type="text" id="fname"></input>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="lname">Last Name</label>
                    <input className="form1" type="text" id="lname"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex flex-column">
                    <label htmlFor="company">Company/Institute</label>
                    <input className="form1" type="text" id="company"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex flex-column">
                    <label htmlFor="Address">
                      Address<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form1"
                      type="Address"
                      id="Address"
                      placeholder="House No."
                    ></input>
                    <input
                      className="form1 mt-2"
                      type="Address"
                      id="Address"
                      placeholder="Street"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="state">
                      State<span className="text-danger">*</span>
                    </label>
                    <input className="form1" type="Address" id="state"></input>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="d-flex flex-column">
                    <label htmlFor="pincode">
                      pincode/zip<span className="text-danger">*</span>
                    </label>
                    <input
                      className="form1"
                      type="Address"
                      id="pincode"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="mail">
                      Email Address<span className="text-danger">*</span>
                    </label>
                    <input className="form1" type="email" id="mail"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="phone">
                      Phone<span className="text-danger">*</span>
                    </label>
                    <input className="form1" type="Address" id="phone"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex flex-column">
                    <label htmlFor="message">Order Notes</label>
                    <textarea className="" rows="5" cols="30" id="message" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-6 col-12">
            <div className="">
              <Coupon />
              <Yourorder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Coupon() {
  return (
    <>
      <div className=" col-lg-12">
        <h1> Coupon Code</h1>
        <div className="bg-white p-5 ">
          <p>Enter your coupon code if you have one</p>
          <div className="d-flex ">
            <input className="form1" type="text" id="coupon"></input>
          </div>
        </div>
      </div>
    </>
  );
}

function Yourorder() {
  const Navigate = useNavigate();
  return (
    <>
      <div className=" col-lg-12">
        <h1> Your Order</h1>
        <div className="bg-white p-5 ">
          <table class="table site-block-order-table mb-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Top Up T-Shirt <strong class="mx-2">x</strong> 1
                </td>
                <td>$250.00</td>
              </tr>
              <tr>
                <td>
                  Polo Shirt <strong class="mx-2">x</strong> 1
                </td>
                <td>$100.00</td>
              </tr>
              <tr>
                <td class="text-black font-weight-bold">
                  <strong>Cart Subtotal</strong>
                </td>
                <td class="text-black">$350.00</td>
              </tr>
              <tr>
                <td class="text-black font-weight-bold">
                  <strong>Order Total</strong>
                </td>
                <td class="text-black font-weight-bold">
                  <strong>$350.00</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bank" onClick={display}>
            <h5>Direct Bank Transfer</h5>
            <p id="para">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="bank" onClick={display1}>
            <h5>Upi ID</h5>
            <p id="para1">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="bank" onClick={display2}>
            <h5>Google Pay</h5>
            <p id="para2">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <button
            className="btn btn-dark mt-3"
            onClick={() => Navigate("/thank")}
            style={{ width: "130px", height: "50px" }}
          >
            Pay Now{" "}                  
          </button>
        </div>
      </div>
    </>
  );
}
function display() {
  document.getElementById("para").classList.toggle("show");
}
function display1() {
  document.getElementById("para1").classList.toggle("show");
}
function display2() {
  document.getElementById("para2").classList.toggle("show");
}
