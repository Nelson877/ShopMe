import React from 'react'
import { motion } from 'framer-motion';
import Logo from "../images/logo1.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
       <div className="login-wrapper py-5 home-wrapper-2 login__bg">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
            <motion.div className="col-2 login__logo__img" whileTap={{ scale: 0.9 }}>
              <Link to="/">
                <img className="login__logo__img" src={Logo} alt="Logo" />
              </Link>
            </motion.div>
              <form action="" className="d-flex flex-column gap-15 ">
                <motion.div  whileTap={{ scale: 0.9 }}>
                  <input
                    type="text"
                    placeholder="First name"
                    name="name"
                    className="form-control"
                  />
                </motion.div>
                <motion.div  whileTap={{ scale: 0.9 }}>
                  <input
                    type='text'
                    placeholder="Last name"
                    name="name"
                    className="form-control"
                  />
                </motion.div>
                <motion.div  whileTap={{ scale: 0.9 }}>
                  <input
                    type="email"
                    placeholder="admin@gmail.com"
                    name="email"
                    className="form-control"
                  />
                </motion.div>
                
                <motion.div whileTap={{ scale: 0.9 }} className="mt-1">
                  <input
                    type="password"
                    placeholder="Password@780"
                    name="password"
                    className="form-control"
                  />
                </motion.div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Signup