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
import ReactImageMagnify from "react-image-magnify";
import watchImg300 from "../images/acc.jpg";
import watchImg1200 from "../images/acc1.jpg";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

function SingleProduct() {
  const [orderProduct, setOrderProduct] = useState(false);
  const copyTpClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

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
                  <ReactImageMagnify
                    className="img__product"
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watchImg300,
                      },
                      largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="other-product__images d-flex flex-wrap gap-15">
                <div>
                  <ReactImageMagnify
                    className="img__product"
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watchImg300,
                      },
                      largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    className="img__product"
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watchImg300,
                      },
                      largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    className="img__product"
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watchImg300,
                      },
                      largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
                <div>
                  <ReactImageMagnify
                    className="img__product"
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: watchImg300,
                      },
                      largeImage: {
                        src: watchImg1200,
                        width: 1200,
                        height: 1800,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main__product__details">
                <div className="">
                  <h3 className="title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ 0.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 review__b ">( 2 Reviews )</p>
                  </div>
                  <a href="#review" className="review__btn">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product__heading">Type :</h3>
                    <p className="product__data">Item Type</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product__heading">Brand :</h3>
                    <p className="product__data">Havlls</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product__heading">Category :</h3>
                    <p className="product__data">Item Name</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product__heading">Tags :</h3>
                    <p className="product__data">Item Tag</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product__heading">Availablity :</h3>
                    <p className="product__data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2 mb-3">
                    <h3 className="product__heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2 mb-3">
                    <h3 className="product__heading">Colour :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product__heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        id=""
                        style={{ width: "70px" }}
                        min={1}
                        max={10}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button border-0">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column  my-3">
                    <h3 className="product__heading">Shipping & Returns</h3>
                    <p className="product__data">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores aut eum autem ut excepturi ullam dolorem vel,
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product__heading">Product Link</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyTpClipboard("http://localhost:3000/static/media/acc.51d6fc6f289bbddde41b.jpg")
                      }}
                    >Copy Product Link</a>
                  </div>
                </div>
              </div>
            </div>
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
      <section id="review" className="reviews-wrapper py-5 home-wrapper-2">
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
