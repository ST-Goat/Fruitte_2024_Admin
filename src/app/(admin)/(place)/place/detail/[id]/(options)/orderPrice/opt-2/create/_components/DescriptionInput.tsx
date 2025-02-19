"use client";

import React from "react";
import * as hook from "@/features/place/hooks/orderPrice";

const DescriptionInput = () => {
  const { title, setTitle, price, setPrice } =
    hook.usePlaceOrderPriceOpt2CreateStore();

  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          티켓명
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          가격
        </label>
        <input
          type="number"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </>
  );
};

export default DescriptionInput;
