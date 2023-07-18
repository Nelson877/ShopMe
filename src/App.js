import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import './index.css';
import OurStore from "./pages/OurStore";
import Blogs from "./components/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import TermAndContions from "./pages/TermAndContions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefunPolicy from "./pages/RefunPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />{" "}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="store/product/:id" element={<SingleProduct />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/product" element={<CompareProduct />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/term-contion" element={<TermAndContions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/refun-policy" element={<RefunPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
