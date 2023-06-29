import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import homeap from "../images/homeap.png";
import cross from "../images/cross.svg";
import Color from "../components/Color";

function CompareProduct() {
  return (
    <div>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* Set page 1  */}
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={homeap} alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Honor T1 7.0.1 GB ROM 7 Inch </h5>
                  <h6 className="price mb-3 mt-3 ">$ 100.00</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand :</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Types :</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity :</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Colour :</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size :</h5>
                      <div className="d-flex gap-10">
                        <p>S</p> /<p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Set page 1 end  */}
            {/* Set page 2  */}
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={cross}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={homeap} alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Honor T1 7.0.1 GB ROM 7 Inch </h5>
                  <h6 className="price mb-3 mt-3 ">$ 100.00</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand :</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Types :</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availablity :</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Colour :</h5>
                      <Color />
                    </div>
                    <div className="product-details">
                      <h5>Size :</h5>
                      <div className="d-flex gap-10">
                        <p>S</p> /<p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Set page 2 end  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareProduct;
