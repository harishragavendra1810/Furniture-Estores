import React from "react";

let blogs = {
  url1: "https://themewagon.github.io/furni/images/post-1.jpg",
  url2: "https://themewagon.github.io/furni/images/post-3.jpg",
  url3: "https://themewagon.github.io/furni/images/post-2.jpg",
};

function Blogs() {
  return (
    <div className="container" style={{ backgroundColor: "#eff2f1" }}>
     <div className="row">
        <BlogContent src={blogs.url1} />
        <BlogContent src={blogs.url2} />
        <BlogContent src={blogs.url3} />
    </div>
    </div>
  );
}

export default Blogs;

function BlogContent({ src }) {
  return (
   
        <div className="col-12 col-lg-4 col-md-6 text-center">
              <img
                src={src}
                alt=""
                style={{ height: "350px", width: "300px", borderRadius: "20px" }}
              />
            <h6>First Time Home Owner Ideas</h6>
            <p>
              by <b>Kristin Watson </b>on Dec 19, 2021
            </p>
        </div>

  );
}
