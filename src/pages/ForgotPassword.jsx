import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "./BreadCrumb";
import { motion } from "framer-motion";
import Logo from "../images/logo1.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div>
      <div className="login-wrapper py-5 home-wrapper-2 login__bg">
        <div className="row">
          <div className="col-12">
            <motion.div className="col-2" whileTap={{ scale: 0.9 }}>
              <Link to="/">
                <img className="login__logo__img2" src={Logo} alt="Logo" />
              </Link>
            </motion.div>
            <div className="auth-card">
              <h3 className="logup__text mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15 ">
                <motion.div whileTap={{ scale: 0.9 }}>
                  <input
                    type="email"
                    placeholder="admin@gmail.com"
                    name="email"
                    className="form-control"
                  />
                </motion.div>

                <div>
                 
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">Submit</button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
