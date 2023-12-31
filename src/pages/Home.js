import React, { useContext } from "react";
// import products context
import { ProductContext } from "../contexts/ProductContext";
 import Hero from "../components/Hero";
// import components
import Product from "../components/Product";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // console.log(products);

  // get only men's & women's clothing category
  const filteredproducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredproducts);
  return (
    <div>
<Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredproducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
// 1:40?