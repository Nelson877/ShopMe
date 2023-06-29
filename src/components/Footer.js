import React from "react";
import newsletter from "../images/newsletter.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsltter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  className="input-group-text p-2"
                  id="basic-addon2"
                >
                  Subscribe
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                {/* <address className="text-white fs-6">
                  Hon : Accra Ghana
                </address> */}
                <a
                  className="mt-3 d-block mb-1 text-white"
                  href="tel:(+233) 208 409 514"
                >
                  (+233) 208 409 514
                </a>
                <a
                  className="mt-2 d-block mb-0 text-white"
                  href="mailto:dziknel123@gmail.com"
                >
                  dziknel123@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="">
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsFacebook className="text-white fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsWhatsapp className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/term-contion" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to='/blog' className="text-white py-2 mb-1">Blogs</Link>
                <Link to='/privacy-policy' className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/refun-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1">Shipping Policy</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/about" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1">Size Chat</Link>
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Qulck Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Phones & Laptops</Link>
                <Link className="text-white py-2 mb-1">Food Stuff</Link>
                <Link className="text-white py-2 mb-1">Accessorins</Link>
                <Link className="text-white py-2 mb-1">Foot Wears</Link>
                <Link className="text-white py-2 mb-1">Clothing</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered by DevDzik
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
