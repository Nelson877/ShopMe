import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import cross from "../images/cross.svg";
import headphone from "../images/headphone.png";

function Wishlist() {
  return (
    <div>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* section page 1 */}
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={headphone}
                    alt="image of headphone"
                    className="img-fluid w-100"
                  />
                </div>
             
              </div>
              <div className="py-3 px-3">
              <h5 className="title">Honor T1 7.0.1 GB ROM 7 Inch </h5>
                <h6 className="price ">$ 100.00</h6>
              </div>
            </div>
            {/* section page 1 end  */}
             {/* section page 2 */}
             <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={headphone}
                    alt="image of headphone"
                    className="img-fluid w-100"
                  />
                </div>
             
              </div>
              <div className="py-3 px-3">
              <h5 className="title">Honor T1 7.0.1 GB ROM 7 Inch </h5>
                <h6 className="price ">$ 100.00</h6>
              </div>
            </div>
            {/* section page 2 end  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
