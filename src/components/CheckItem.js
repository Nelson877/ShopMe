import React from "react";




const CheckItem = ({item}) => {
    const { id, image, category, title, price } = item;

  return (
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-28 w-24 rounded-md"
                src={image}
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                
                  <span className="font-semibold">{title}</span>
                
                <span className="float-right text-gray-400">{category}</span>
                <p className="mt-auto text-lg font-bold">₵ {price}</p>
              </div>
            </div>
            
          </div>
  );
};

export default CheckItem;
