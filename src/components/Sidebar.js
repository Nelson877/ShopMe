import React, { useContext } from "react";

// import link
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import component
import CartItem from "../components/CartItem";

// import cart context
import { CartContext } from "../contexts/CartContext";


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // console.log(useContext(CartContext));
// const {checkCart} =useContext(CartContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
      w-full bg-lime-50 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/* icon  */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justift-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {/* py-4 mt-4 */}
      <div className="flex flex-col gap-y-3">
        <div className="flex w-full justify-between items-center">
          {/* total amount */}
          <div className="font-semibold uppercase">
            <span className="mr-2">Total: </span>₵ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart  */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-lime-500 text-lime-950 w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View cart</Link>
        <Link to={'/checkout'}  className="bg-lime-200 flex p-4 justify-center items-center text-primary w-full font-medium">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
