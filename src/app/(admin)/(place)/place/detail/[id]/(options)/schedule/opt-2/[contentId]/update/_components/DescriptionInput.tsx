"use client";

import React from "react";
import { usePlaceScheduleOpt2DetailStore } from "@/features/place/hooks/placeSchedule";

const DescriptionInput = () => {
  const { title, setTitle, description, setDescription, time, setTime } =
    usePlaceScheduleOpt2DetailStore();

  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          제목
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
          설명
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          소요시간
        </label>
        <input
          type="number"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
    </>
  );
};

export default DescriptionInput;
