const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: string,
      required: true,
    },
    products: [
      { productId: { type: string }, quantity: { type: Number, default: 1 } },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: object, required: true },
    delivery_status: { type: string, default: "pending" },
    payment_status: { type: string, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.models("Order", orderSchema);

exports.Order = Order;
