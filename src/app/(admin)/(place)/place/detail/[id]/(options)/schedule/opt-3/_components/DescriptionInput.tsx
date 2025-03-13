"use client";

import React from "react";
import * as hook from "@/features/place/hooks/placeSchedule";
import Postcode from "./PostCode";

const DescriptionInput = () => {
  const {
    placeText,
    setPlaceText,
    region,
    setRegion,
    address,
    setAddress,
    lat,
    setLat,
    long,
    setLong,
  } = hook.usePlaceScheduleOpt3Store();

  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          장소(예시: 김포 예뜰도자기)
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={placeText || ""}
          onChange={(e) => setPlaceText(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          지역(예시: 경기도 김포시)
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={region || ""}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <Postcode />
      <div className="my-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          주소(예시: 경기도 김포시 하성면 누산봉성로)
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <div className="mb-5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            좌표 - 위도
          </label>
          <input
            type="text"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            value={lat || ""}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          좌표 - 경도
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={long || ""}
          onChange={(e) => setLong(e.target.value)}
        />
      </div>
    </>
  );
};

export default DescriptionInput;
