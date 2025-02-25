"use client";

import React from "react";
import { usePlaceNearbyOpt1DetailStore } from "@/features/place/hooks/placeNearby";

const FormInput = () => {
  const {
    title,
    setTitle,
    info,
    setInfo,
    url,
    setUrl,
    address,
    setAddress,
    long,
    setLong,
    lat,
    setLat,
  } = usePlaceNearbyOpt1DetailStore();
  return (
    <>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          제목
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-5.5">
        <label
          htmlFor="textareaLabel"
          className="mb-4.5 block text-sm font-medium text-black dark:text-white"
        >
          설명
        </label>
        <textarea
          rows={6}
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={info || ""}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          홈페이지 주소
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={url || ""}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          주소
        </label>
        <input
          type="text"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          구글 지도를 통해 좌표를 검색한 후 입력해주세요.
        </label>
        <div className="mb-5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            좌표 - 위도
          </label>
          <input
            type="number"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            value={lat || ""}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          좌표 - 경도
        </label>
        <input
          type="number"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={long || ""}
          onChange={(e) => setLong(e.target.value)}
        />
      </div>
    </>
  );
};

export default FormInput;
