import React, { createContext, useEffect, useState } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // const [pro, setPro] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProductsNew = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products/category/jewelery/${name}");
  //     const data = await res.json();
  //     setPro(data);
  //   };
  //   fetchProductsNew()
  // }, []);
// if (pro.length === 0) return <div>Loading....</div>
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
