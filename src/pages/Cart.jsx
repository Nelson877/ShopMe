import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import { motion } from "framer-motion";
import image from '../images/watch.jpg'

function Cart() {
  return (
    <div>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Row__one  */}
              <div className="cart__header  py-3 d-flex justify-content-between align-content-center">
                <h4 className="cart__col-1">Product</h4>
                <h4 className="cart__col-2">Price</h4>
                <h4 className="cart__col-3">Quantity</h4>
                <h4 className="cart__col-4">Total</h4>
              </div>
              {/* Row__one end  */}
              {/* Row__one  */}
              <div className="cart__date  py-3 d-flex justify-content-between align-content-center">
                <div className="cart__col-1 d-flex align-items-center">
                  <div>
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <h5 className="title">dnneeef</h5>
                    <p className="color">kjb</p>
                    <p className="size">00</p>
                  </div>
                </div>
                <div className="cart__col-2"></div>
                <div className="cart__col-3"></div>
                <div className="cart__col-4"></div>
              </div>
              {/* Row__one end  */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
