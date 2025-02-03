"use client";

import React from "react";
import { usePlaceIntroOpt2DetailStore } from "@/features/place/hooks/placeIntro";
const DescriptionInput = () => {
  const { description, setDescription } = usePlaceIntroOpt2DetailStore();
  return (
    <div className="mb-5">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        PICKPOINT 설명
      </label>
      <input
        type="text"
        placeholder="설명을 작성해주세요."
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};

export default DescriptionInput;
