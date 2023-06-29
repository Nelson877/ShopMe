import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">7 June, 2023</p>
          <h5 className="title"></h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            aspernatur, ipsum minus quia incidunt, facilis amet nobis magni
            sequi.
          </p>
          <Link to='/blogs/:id' className='button'>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
