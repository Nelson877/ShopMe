import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FiSearch } from "react-icons/fi";
import cart from "../images/cart.svg";
import user from "../images/user.svg";
import wishlist from "../images/wishlist.svg";
import compare from "../images/compare.svg";
import { motion } from "framer-motion";
import menu from "../images/menu.svg";

function Header() {
  return (
    <div>
      {/* header section 1 */}
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Delivery Over ₵0.00 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:(+233) 208 409 514 ">
                  (+233) 208 409 514
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* header section 1 end */}

      {/* header section 2 */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <motion.div className="col-2" whileTap={{ scale: 0.9 }}>
              <Link to="/">
                <img className="img" src={Logo} alt="Logo" />
              </Link>
            </motion.div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here...."
                  aria-label="Search Product Here...."
                  aria-describedby="basic-addon2"
                />
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className="input-group-text "
                  id="basic-addon2"
                >
                  <FiSearch className="fs-6" />
                </motion.span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <motion.div whileTap={{ scale: 0.75 }}>
                  <Link to='/product' className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.75 }}>
                  <Link to='/wishlist' className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br />
                      Wishlist
                    </p>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.75 }}>
                  <Link to='/login' className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      LogIn <br />
                      My Account
                    </p>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.75 }}>
                  <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₵200</p>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section 2 end */}
      {/* header section 3 */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        {" "}
                        Shop Categories
                      </span>
                    </motion.button>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </motion.ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header section 3 end */}
    </div>
  );
}

export default Header;
