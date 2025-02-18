"use client";
import React from "react";
import { usePlaceScheduleOpt6Store } from "@/features/place/hooks/placeSchedule";

const Textarea = () => {
  const { description, setDescription } = usePlaceScheduleOpt6Store();

  return (
    <div className="mb-5.5">
      <label
        htmlFor="textareaLabel"
        className="mb-4.5 block text-sm font-medium text-black dark:text-white"
      >
        주의사항 내용 - 줄바꿈 기준으로 나열됩니다.
      </label>
      <textarea
        rows={6}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
