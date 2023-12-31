import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import cart context
import { CartContext } from "../contexts/CartContext";
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";
import CheckItem from "./CheckItem";

import Bolt from '../img/Bolt.png'
import Yango from '../img/yango.png'
import Error from "./Error";
import Tanx from './Tanx'

const Checkout = ({image, title, price, category}) => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
const {backEnd, setBackEnd} = useState([{}])

useEffect(() =>{
  fetch('/api').then(
    response => response.json()
  ).then(
    data =>{
      setBackEnd(data)
    }
  )
}, [])




  return (
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <Link to={"/"} className="text-2xl font-bold text-lime-800">
      Check Out
    </Link>
    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            {/* shop section  */}
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#"
            >
              <svg
                xmlns=""
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </a>
            <span className="font-semibold text-gray-900">Shop</span>
          </li>
          {/* arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
              href="#"
            >
              2
            </a>
            <span className="font-semibold text-gray-900">Shipping</span>
          </li>
          {/* arrow  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {/* payment  */}
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
              href="#"
            >
              3
            </a>
            <span className="font-semibold text-gray-500">Payment</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <p className="text-gray-400">
          Check your items. And select a suitable shipping method.
        </p>
        {/* products items  */}

        {cart.map((item) => {
        return <CheckItem item={item} key={item.id} />;
      })}
       {/* <CheckItem/> */}

        <p className="mt-8 text-lg font-medium">Shipping Methods</p>
        <form className="mt-5 grid gap-6">
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              checked
            />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1"
            >
              <img
                className="w-14 object-contain"
                src={Bolt}
                alt=""
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold">Fedex Delivery</span>
                <p className="text-slate-500 text-sm leading-6">
                  Delivery: 2 Days
                </p>
              </div>
            </label>
          </div>
          <div className="relative">
            <input
              className="peer hidden"
              id="radio_2"
              type="radio"
              name="radio"
              checked
            />
            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2"
            >
              <img
                className="w-14 object-contain"
                src={Yango}
                alt=""
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold">Fedex Delivery</span>
                <p className="text-slate-500 text-sm leading-6">
                  Delivery: 2-4 Days
                </p>
              </div>
            </label>
          </div>
        </form>
      </div>

     

      <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p className="text-xl font-medium">Payment Details</p>
        <p className="text-gray-400">
          Complete your order by providing your payment details.
        </p>
       <form action="">
       <div>
          <label for="email"  class="mt-4 mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your.email@gmail.com"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <label
            for="card-holder"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Holder
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label
            for="card-no"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Card Details
          </label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="tel"
                pattern="[0-9]*"
                inputmode="numeric"
                className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              name="credit-expiry"
              className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY"
            />
            <input
              type="text"
              name="credit-cvc"
              className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC"
            />
          </div>
          <label
            for="billing-address"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-7/12">
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img className="h-4 w-4 object-contain" src="" alt="" />
              </div>
            </div>
            <select
              type="text"
              name="billing-state"
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="text">Select State...</option>
              <option value="text">Ghana</option>
            </select>
            <input
              type="text"
              name="billing-zip"
              className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>

          {/* Total */}
          <div className="mt-6 border-t border-b py-2">
           
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">₵ {parseFloat(itemAmount).toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">₵ {parseFloat(total).toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              ₵{parseFloat(total).toFixed(2)}
            </p>
            {/* <span className="mr-2">Total: </span>₵ {parseFloat(total).toFixed(2)} */}
          </div>
        </div>
       </form>
        <Link to={'/tanx'}>
        <button
          onClick={clearCart}
          className="mt-4 mb-8 w-full rounded-md bg-lime-700 px-6 py-3 font-bold text-white text-[20px]"
        >
          Pay
        </button>
        </Link>
      </div>
     
    </div>
  </div>
  );
};

export default Checkout;
