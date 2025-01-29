"use client";

import React from "react";

const DescriptionInput = () => {
  return (
    <div className="mb-5">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        PICKPOINT 설명
      </label>
      <input
        type="text"
        placeholder="설명을 작성해주세요."
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default DescriptionInput;
