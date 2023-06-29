import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import BlogCard from "./BlogCard";
import game from "../images/game.jpg";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";

function SingleBlog() {
  return (
    <div>
      {/* <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" /> */}
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single__blog__card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-5" /> Go back
                </Link>
                <h3 className="title">Items Title</h3>
                <img
                  src={game}
                  className="img-fluid w-100 my-4"
                  alt="product image"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat laboriosam, ipsa vero nesciunt in molestiae.
                  Reprehenderit veniam veritatis suscipit? Voluptates, veniam
                  dolores. Quam neque sit illum, obcaecati mollitia consequatur
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
