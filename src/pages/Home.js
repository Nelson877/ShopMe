import React from "react";
import { Link } from "react-router-dom";
import mainbanner from "../images/main-banner.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";
import catbanner01 from "../images/catbanner-01.jpg";
import service from "../images/service.png";
import service02 from "../images/service-02.png";
import service03 from "../images/service-03.png";
import service04 from "../images/service-04.png";
import service05 from "../images/service-05.png";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.png";
import acc from "../images/acc.jpg";
import homeap from "../images/homeap.png";
import Marquee from "react-fast-marquee";
import brand01 from "../images/brand-01.png";
import brand02 from "../images/brand-02.png";
import brand03 from "../images/brand-03.png";
import brand04 from "../images/brand-04.png";
import brand05 from "../images/brand-05.png";
import brand06 from "../images/brand-06.png";
import brand07 from "../images/brand-07.png";
import brand08 from "../images/brand-08.png";
import game from "../images/game1.jpg";
import Beauty from "../images/Beauty.jpg";
import speaker from "../images/speaker.jpg";
import ReactStars from "react-rating-stars-component";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import tab from "../images/tab.jpg";
import tab3 from "../images/tab3.jpg";
import watch from "../images/watch.jpg";
import { BsCart4 } from "react-icons/bs";

function Home() {
  return (
    <div>
      {/* Main Banner section  */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={mainbanner}
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From ₵0.00 or ₵0.00</p>
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Link className="button">
                      <AiOutlineShoppingCart className="fs-5" />
                      BUY NOW
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                {/* section 1 */}
                <div className="small-banner position-relative">
                  <img
                    src={catbanner01}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From ₵0.00 or ₵0.00</p>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Link className="button1">
                        <AiOutlineShoppingCart className="fs-9" />
                        BUY NOW
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* section 1 end  */}

                {/* section 2 */}
                <div className="small-banner position-relative ">
                  <img
                    src={catbanner01}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From ₵0.00 or ₵0.00</p>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Link className="button1">
                        <AiOutlineShoppingCart className="fs-9" />
                        BUY NOW
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* section 2 end  */}

                {/* section 3 */}
                <div className="small-banner position-relative">
                  <img
                    src={catbanner01}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From ₵0.00 or ₵0.00</p>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Link className="button1">
                        <AiOutlineShoppingCart className="fs-9" />
                        BUY NOW
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* section 3 end  */}

                {/* section 4 */}
                <div className="small-banner position-relative">
                  <img
                    src={catbanner01}
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From ₵0.00 or ₵0.00</p>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Link className="button1">
                        <AiOutlineShoppingCart className="fs-9" />
                        BUY NOW
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* section 4 end  */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Main Banner section end  */}

      {/* Min Banner section  */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="d-flex align-items-center gap-15"
                >
                  <img src={service} alt="servies" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over ₵0</p>
                  </div>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="d-flex align-items-center gap-15"
                >
                  <img src={service02} alt="servies" />
                  <div>
                    <h6>Daily Surpise Offers</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="d-flex align-items-center gap-15"
                >
                  <img src={service03} alt="servies" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="d-flex align-items-center gap-15"
                >
                  <img src={service04} alt="servies" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="d-flex align-items-center gap-15"
                >
                  <img src={service05} alt="servies" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Min Banner section end */}

      {/* Min Banner section 2 */}
      <div className="home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                {/* image section 1 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                {/* image section 1 end  */}

                {/* image section 2 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="" />
                </div>
                {/* image section 2 end  */}
                {/* image section 3 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={homeap} alt="" />
                </div>
                {/* image section 3 end  */}
                {/* image section 4 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                {/* image section 4 end  */}
                {/* New section end  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Min Banner section2 end  */}

      {/* Items logo section  */}

      {/* Product main section  */}
      <section className="blog-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* 1 Product inside section  */}
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
            {/* 1 Product inside section end  */}

            {/* 2 Product insidesection  */}
            <div className="col-3">
              <Link to="" className="product__card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src={wish} alt="wish__icon" />
                  </Link>
                </div>
                <div className="product__image">
                  <img
                    src="https://www.bhphotovideo.com/images/images2500x2500/thronmax_m4_plus_mdrill_zero_plus_usb_1556813.jpg"
                    alt=""
                    className="product__img"
                  />
                  <img src={game} alt="" className="product__img" />
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
                    value={2}
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
            {/* 2 Product inside section end  */}

            {/* 3 Product insidesection  */}
            <div className="col-3">
              <Link to="" className="product__card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src={wish} alt="wish__icon" />
                  </Link>
                </div>
                <div className="product__image">
                  <img
                    src="https://www.bhphotovideo.com/images/images2500x2500/thronmax_m4_plus_mdrill_zero_plus_usb_1556813.jpg"
                    alt=""
                    className="product__img"
                  />
                  <img src={game} alt="" className="product__img" />
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
                    value={3}
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
            {/* 3 Product inside section end  */}

            {/* 4 Product insidesection  */}
            <div className="col-3">
              <Link to="" className="product__card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src={wish} alt="wish__icon" />
                  </Link>
                </div>
                <div className="product__image">
                  <img
                    src="https://www.bhphotovideo.com/images/images2500x2500/thronmax_m4_plus_mdrill_zero_plus_usb_1556813.jpg"
                    alt=""
                    className="product__img"
                  />
                  <img src={game} alt="" className="product__img" />
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
                    value={3}
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
            {/* 4 Product inside section end  */}
          </div>
        </div>
      </section>
      {/*Product main section end  */}

      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand01} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand02} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand03} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand04} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand05} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand06} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand07} alt="brand" />
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="mx-4 w-25">
                      <img src={brand08} alt="brand" />
                    </div>
                  </Link>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* home-wrapper-2 */}
      {/* Items logo section end  */}

      {/*A Row section  */}
      <section className="blog-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">
                        Gaming <br /> accessories
                      </h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={Beauty} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">Beauty picks</h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">Dresses</h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">Electronics</h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
          </div>
        </div>
      </section>
      {/*A Row section end  */}

      {/*A Row section  */}
      <section className="blog-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">
                        Gaming <br /> accessories
                      </h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">
                        Gaming <br /> accessories
                      </h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">
                        Gaming <br /> accessories
                      </h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
            {/* Blog card section  */}
            <div className="col-3">
              <dvi className="blog-card">
                <div className="card-image">
                  <Link to="/" className="a">
                    <img src={game} alt="" className="img-fluid" />
                    <div className="card__body">
                      <h1 className="card-title">
                        Gaming <br /> accessories
                      </h1>
                      <Link to="/" className="card__btn">
                        See More
                      </Link>
                    </div>
                  </Link>
                </div>
              </dvi>
            </div>
            {/* Blog card section end  */}
          </div>
        </div>
      </section>
      {/*A Row section end  */}

      {/* special main section */}
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* 1 special inside section  */}
            <div className="col-6 mb-3">
              <div className="special-product-card">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={watch} alt="" className="img-fluid" />
                  </div>
                  <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">$100</span> &nbsp;{" "}
                      <strike>$120</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b>5</b>days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="span__ov badge p-2 bg-danger">1</span>{" "}
                        :<span className="span__ov badge p-2 bg-danger">1</span>{" "}
                        :<span className="span__ov badge p-2 bg-danger">1</span>
                      </div>
                    </div>
                    <div className="prod__count my-3">
                      <p>Products: 5</p>
                      <div class="progress line">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <Link className="button ">
                      <BsCart4 />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* 1 special inside section end */}
          </div>
        </div>
      </section>
      {/* special main section end */}

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
    
      {/* famous main section */}
      {/* <section className="famous-wrapper home-wrapper-2">
<div className="container-xxl">
   <div className="row">
    <div className="col-3">
      <div className="famous-card position-relative">
        <img src={game} alt="" />
      <div className="famous-content position-absolute">
      <h5>Big Screen</h5>
        <h6>Smart Watch Series</h6>
        <p>From $399 or $16.62/mo for 24 mo</p>
      </div>
      </div>
    </div>
   </div>
</div>
      </section> */}
      {/* famous main section  */}
    </div>
  );
}

export default Home;
// 2:54
