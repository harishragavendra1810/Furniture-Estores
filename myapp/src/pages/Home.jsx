import React from "react";
import Frontcontent from "../components/Frontcontent";
import Topnav from "../components/Nav";
import Whychooseus from "../components/whychooseus";
import Explore from "./Explore";
import Aboutcontent from "../components/Aboutcontent";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="mt-5  "
        style={{ backgroundColor: "#3b5d50", width: "100%" }}
      >
        <div className="container">
          <div className="row">
            <Topnav explore={"Explore"} />
            <div className="col-12 col-lg-5">
              <Frontcontent />{" "}
            </div>
            <div className="col-12 col-lg-7">
              <img
                src="https://themewagon.github.io/furni/images/couch.png"
                alt="furnitureHome"
              />{" "}
            </div>
          </div>
        </div>
        <div className="" style={{ backgroundColor: "#eff2f1" }}>
          <Explore style={{ backgroundColor: "#eff2f1" }} />
          <Aboutcontent />
          <Whychooseus />
          <h1 className="text-center">Recent Blogs</h1>
          <Blogs />
        </div>{" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Home;
