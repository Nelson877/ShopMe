import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";
import { CgMenu } from "react-icons/cg";
import { RiMenu5Line } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";
import { RiMenu4Line } from "react-icons/ri";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

function OurStore() {
  const [grid, setGrid] = useState(4);
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Avaliablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type=""
                        className="form-control"
                        style={{ height: "49px" }}
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput1">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type=""
                        className="form-control"
                        style={{ height: "49px" }}
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colour</h5>
                  <div>
                   <Color/>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Smart Watch
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tv
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  {/* 1 Random Product  */}
                  <div className="random-products mb-3  d-flex">
                    <div className="w-50">
                      <img src={watch} alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>₵ 300</b>
                    </div>
                  </div>
                  {/* 1 Random Product end  */}
                  {/* 1 Random Product  */}
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src={watch} alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>₵ 300</b>
                    </div>
                  </div>
                  {/* 1 Random Product end  */}
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p
                      className="mb-0 d-block sort__ti"
                      style={{ width: "100px" }}
                    >
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <RiMenu5Line onClick={() => {
                        setGrid(3)
                      }} className="d-block   img__icon " />

                      <TbMenu onClick={() => {
                        setGrid(4)
                      }} className="d-block   img__icon " />

                      <RiMenu4Line onClick={() => {
                        setGrid(6)
                      }} className="d-block gap-10  img__icon " />

                      <CgMenu onClick={() => {
                        setGrid(4)
                      }} className="d-block   img__icon " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              <ProductCard grid={grid}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
// 4:07
