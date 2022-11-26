import React, { useState, useEffect } from "react";

export default function Process({ handleFinal }) {
  const [price, setPrice] = useState("");

  const [discount, setDiscount] = useState(0);
  let finalPrice = price - (price * discount) / 100;

  return (
    <div className="flex flex-col gap-4 ">
      <div className="p-4 flex flex-col">
        <label htmlFor="inp">Innitial price</label>
        <input
          value={price}
          type="search"
          name=""
          id="inp"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="p-4 flex flex-col">
        <label htmlFor="dis">Discount Percent</label>
        <input
          value={discount}
          type="range"
          name=""
          id="dis"
          min={0}
          max={100}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3>{`Discount percnet :${discount}%`}</h3>
        <h3>{`Final Price : ${finalPrice}`}</h3>
        <h3
          className="bg-green-500 px-3 py-2 cursor-pointer"
          onClick={(e) => handleFinal(finalPrice)}
        >
          Add
        </h3>
      </div>
    </div>
  );
}
