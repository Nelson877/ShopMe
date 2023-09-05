import React from "react";
// Import react-router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Tanx from "./components/Tanx";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tanx" element={<Tanx />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
