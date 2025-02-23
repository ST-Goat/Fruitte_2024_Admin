"use client";
import React from "react";
import { usePlaceScheduleOpt1Store } from "@/features/place/hooks/placeSchedule";

const Textarea = () => {
  const { totalTime, setTotalTime, dateAndTime, setDateAndTime } =
    usePlaceScheduleOpt1Store();

  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          총 소요시간(분) - 소요시간 별 설명 파트의 총 소요시간(분)과 동일하게
          설정해주세요.
        </label>
        <input
          type="number"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={totalTime}
          onChange={(e) => setTotalTime(e.target.value)}
        />
      </div>{" "}
      <div className="mb-5.5">
        <label
          htmlFor="textareaLabel"
          className="mb-4.5 block text-sm font-medium text-black dark:text-white"
        >
          &quot;날짜 및 시간&quot; - 줄바꿈 기준으로 나열됩니다.
        </label>
        <textarea
          rows={6}
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={dateAndTime}
          onChange={(e) => setDateAndTime(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
