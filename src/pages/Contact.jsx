import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "../components/Meta";
import {   AiOutlineHome, AiOutlineMail,AiFillInfoCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import {MdSend} from 'react-icons/md'


function Contact() {
  return (
    <div>
      <Meta title={"Contacts"} />
      <BreadCrumb title="Contacts" />

      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72272976134!2d-0.26213223044853146!3d5.591373809759278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1686227803096!5m2!1sen!2sgh"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Numbr"
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
                    <div>
                      <button className="button border-0">
                        Submit
                      </button>
                       {/* <MdSend size={10} className="icon__image"/> */}
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                       <li className="mb-3 d-flex gap-10 ">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">27th Street, GA-123-8765, Cool Block</address>
                       </li>
                       <li className="mb-3 d-flex gap-10 ">
                        <BsPhone className="fs-5"/>
                        <a href="tel:+233 000000000">tel:+233 000000000</a>
                       </li>
                       <li className="mb-3 d-flex gap-10 ">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mail to:admin123@gmail.com">admin123@gmail.com</a>
                       </li>
                       <li className="mb-3 d-flex gap-10 ">
                        <AiFillInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 7am-12am</p>
                       </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
