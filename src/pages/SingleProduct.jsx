import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import tab from "../images/tab.jpg";
import tab3 from "../images/tab3.jpg";
import ReactStars from "react-rating-stars-component";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import FAQData from "../data/faqs.json";
import PeoData from "../data/pro.json";
import ReactImageZoom from 'react-image-zoom';

function SingleProduct() {
  const [orderProduct, setOrderProduct] = useState(false);
  const props = {width: 400, height: 250, zoomWidth: 500, img: {wish}};

  return (
    <div>
      <Meta title={"Products"} />
      <BreadCrumb title="Products" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                <ReactImageZoom {...props} />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      {/* Description section  */}
      <div className="description-wrapper py-5 home-wrapper-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {FAQData.map((item) => (
                <div className="bg-white p-3" key={item.id}>
                  <h4>{item.header}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description section  */}

      {/* Reviews section  */}
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Review</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  {PeoData.map((items) => (
                    <div key={items.id}>
                      <h4 className="mb-2">{items.title}</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                  ))}
                  {orderProduct && (
                    <div>
                      <Link
                        className="text-dark text-decoration-underline"
                        to=""
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review__form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>

                    <div>
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write Your Comments..."
                        rows="5"
                        cols="30"
                        className="w-100 form-control"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                      {/* <MdSend size={10} className="icon__image"/> */}
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Divs</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni expedita, cum, magnam animi soluta hic enim earum
                      minima vel reiciendis tenetur, repellat rem culpa
                      necessitatibus! Nulla architecto nobis necessitatibus
                      pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews section end  */}

      {/* Product main section  */}
      <section className="popular-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* 1 Product inside section  */}
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            {/* 1 Line section  */}
            <div className="col-3">
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
                    Shure SM7B Vocal Dynamic Microphone for Broadcast, Podcast &
                    Recording, XLR Studio Mic for Music & Speech, Wide-Range
                    Frequency, Warm & Smooth Sound, Rugged Construction,
                    Detachable Windscreen - Black
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
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
            {/* 1 Line section end */}
          </div>
        </div>
      </section>
      {/*Product main section end  */}
    </div>
  );
}

export default SingleProduct;
