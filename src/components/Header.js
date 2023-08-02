import React, { useContext } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import icons
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-lime-800">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsHandbag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
