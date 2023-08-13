import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // set total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // update items amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // console.log(newItem);
    // console.log(`${product.title} added to the cart`);

    // checking if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartItem);

// Check out cart 
const checkCart = () =>{
  console.log('check out');
}


    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // console.log(cart);

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const incresaeAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    // console.log(item);
    addToCart(cartItem, id);
    // console.log(`item ${id} amount increase`);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(item);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incresaeAmount,
        decreaseAmount,
        itemAmount,
        total,
        checkCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// 1:24
