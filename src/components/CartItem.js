import React from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  //  Destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image  */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="Image of the item" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon  */}
          <div className="flex justify-between mb-2">
            {/* adding item title  */}
            <Link
              className="text-sm font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove items  */}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:bg-red-500 hover:text-white hover:rounded-full transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px]">
            {/* adding qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon  */}
              <div className="flex-1 flex justify-center items-center cursor-pointer ">
                <IoMdRemove />
              </div>
              {/* amount  */}
              <div className="h-full flex justify-center items-center px-2 ">{amount}</div>
              {/* plus icon  */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer ">
                <IoMdAdd />
              </div>
            </div>

            {/* adding  item price */}
            <div>item price</div>

            {/* adding final price */}
            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
