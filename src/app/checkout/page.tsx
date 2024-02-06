"use client";
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCheckout = () => {
    console.log("Ödeme işlemi tamamlandı.");
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-2xl font-bold uppercase">Checkout</h1>
      <form onSubmit={handleCheckout} className="space-y-4">
        <div>
          <label className="mb-1 block">Address:</label>
          <textarea
            required
            typeof="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div>
          <label className="mb-1 block">Card Number:</label>
          <input
            required
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="mb-1 block">Expiry Date:</label>
            <input
              required
              type="month"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="mb-1 block">CVV:</label>
            <input
              required
              type="number"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 p-2 uppercase text-white"
        >
          Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
