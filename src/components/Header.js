import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

import { CartContext } from "../contexts/CartContext";

// import icons
import { BsHandbag } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo  */}
        <Link to={"/"}>
          <div>
            <GiShoppingBag className="text-[40px] text-lime-800" />
            {/* <img className="w-[40px]" src={} alt="" /> */}
          </div>
        </Link>

        {/* cart  */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsHandbag className="text-2xl" />
          <div className="bg-lime-100 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-lime-900 rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
