import React from "react";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import ReactStars from "react-rating-stars-component";
import tab from "../images/tab.jpg";
import tab3 from "../images/tab3.jpg";

function ProductCard(props) {
  const { grid } = props;
  const location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product__card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wish__icon" />
            </Link>
          </div>
          <div className="product__image">
            <img src={tab} alt="" className="product__img" />
            <img src={tab3} alt="" className="product__img" />
          </div>
          <div className="product__details">
            <h6 className="brand">Dynamic Microphones</h6>
            <h5 className="product__title">
              Shure SM7B Vocal Dynamic Microphone for Broadcast.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 6 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              iure sint ipsum consequuntur placeat odit pariatur molestiae
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action__bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="" className="product__card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wish__icon" />
            </Link>
          </div>
          <div className="product__image">
            <img src={tab} alt="" className="product__img" />
            <img src={tab3} alt="" className="product__img" />
          </div>
          <div className="product__details">
            <h6 className="brand">Dynamic Microphones</h6>
            <h5 className="product__title">
              Shure SM7B Vocal Dynamic Microphone for Broadcast
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 6 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              iure sint ipsum consequuntur placeat odit pariatur molestiae
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action__bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
